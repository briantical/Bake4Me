import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button, Icon} from 'react-native-elements';
import {Formik} from 'formik';
import axios from 'axios';

import {setToken, setUser} from '_actions';

import {storeData, API_URL} from '_utils';

const {height, width} = Dimensions.get('window');
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: {data: '', type: 'success'},
      loading: false,
      show_password: true,
    };
  }

  login = (email, password) => {
    this.setState({loading: true});
    let params = {
      email,
      password,
    };
    let options = {
      responseType: 'json',
    };

    axios
      .post(
        `https://criteria-cakes.appspot.com/api/v1/auth/sign-in`,
        params,
        options,
      )
      .then(response => {
        const {
          data: {
            token,
            user: {
              profile: {complete},
            },
            user,
          },
        } = response;
        storeData('token', token);
        this.props.setToken(token);
        //Asyncstorage doesnt accept objects
        storeData('user', JSON.stringify(user));
        this.props.setUser(user);
        this.setState({loading: false});
        complete
          ? this.props.navigation.navigate('Drawer')
          : this.props.navigation.navigate('Profile');
      })
      .catch(error => {
        console.log('The response' + JSON.stringify(error));
        this.setState({loading: false});
      });
  };
  render() {
    // Synchronous validation
    const validate = values => {
      const errors = {};

      if (!values.email) {
        errors.message = 'Email is Required';
      } else if (!emailRegex.test(values.email)) {
        errors.message = 'Invalid email address';
      } else if (!values.password) {
        errors.message = 'Password is Required';
      } else if (values.password.length < 7) {
        errors.message = 'Password is short';
      } else if (!passwordRegex.test(values.password)) {
        errors.message = 'Password is weak';
      }
      return errors;
    };

    let {message, loading, show_password} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height,
            }}>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={values => this.login(values.email, values.password)}
              validate={values => validate(values)}>
              {({handleChange, handleSubmit, values, errors}) => (
                <View style={{width}}>
                  <Input
                    value={values.email}
                    onChangeText={handleChange('email')}
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                  />
                  <Input
                    value={values.password}
                    onChangeText={handleChange('password')}
                    name="password"
                    label="Password"
                    placeholder="*********"
                    secureTextEntry={show_password}
                    textContentType="password"
                    rightIcon={
                      <Icon
                        name={show_password ? 'visibility' : 'visibility-off'}
                        color="grey"
                        onPress={() =>
                          this.setState({show_password: !show_password})
                        }
                      />
                    }
                  />
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.message}
                  </Text>

                  {loading ? (
                    <Button
                      buttonStyle={{backgroundColor: '#C50069'}}
                      loading
                      containerStyle={{padding: 10}}
                    />
                  ) : (
                    <Button
                      title="LOGIN"
                      titleStyle={{fontWeight: 'bold'}}
                      buttonStyle={{backgroundColor: '#C50069'}}
                      containerStyle={{padding: 10}}
                      onPress={handleSubmit}
                    />
                  )}
                  <Text
                    style={
                      message.type == 'success'
                        ? {
                            color: 'green',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }
                        : {
                            color: 'red',
                            alignSelf: 'center',
                            fontWeight: 'bold',
                          }
                    }>
                    {message.data}
                  </Text>
                  <Text
                    style={{color: '#C50069', alignSelf: 'center'}}
                    onPress={() => this.props.navigation.navigate('Signup')}>
                    Create Account
                  </Text>
                  <Text
                    style={{color: '#C50069', alignSelf: 'center'}}
                    onPress={() => console.log('Forgot password')}>
                    Forgot Password ?
                  </Text>
                </View>
              )}
            </Formik>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              bottom: 20,
            }}>
            <Text style={{color: '#C50069'}}>Bake4Me</Text>
            <Text style={{color: '#C50069'}}>All rights reserved 2020</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  let {user, token} = state;
  return {token, user};
};

const mapDispatchToProps = {setToken, setUser};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

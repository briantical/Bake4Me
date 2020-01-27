import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button, Icon} from 'react-native-elements';
import {Formik} from 'formik';
import axios from 'axios';
import Toast from 'react-native-root-toast';

import {API_URL} from 'react-native-dotenv';

const {height, width} = Dimensions.get('window');
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      message: {data: '', type: 'success'},
      loading: false,
      show_password: true,
    };
  }
  signup = (email, password) => {
    this.setState({loading: true});
    Keyboard.dismiss();
    let params = {
      email,
      password,
    };
    let options = {
      responseType: 'json',
    };

    axios
      .post(`${API_URL}/api/v1/auth/sign-up`, params, options)
      .then(response => {
        const {data} = response;
        if (
          data.message !==
          'A user with the given username is already registered'
        ) {
          this.setState({
            message:
              'An account verification email has been sent to your inbox ',
          });
          this.setState({loading: false});

          // Add a Toast on screen.
          let toast = Toast.show('An email has been sent', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onHide: () => {
              // calls on toast\`s hide animation start.
              this.props.navigation.navigate('Login');
            },
          });

          // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
          setTimeout(function() {
            Toast.hide(toast);
          }, 5000);
        } else {
          this.setState({
            message: {data: 'A user exists. Try logging in', type: 'failure'},
          });
          this.setState({loading: false});
        }
      })
      .catch(error => {
        // console.log('The response' + JSON.stringify(error));
        this.setState({loading: false});
        this.setState({
          message: {data: JSON.stringify(error), type: 'failure'},
        });
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
              onSubmit={values => this.signup(values.email, values.password)}
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
                      title="REGISTER"
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
                    onPress={() => this.props.navigation.navigate('Login')}>
                    Login instead
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

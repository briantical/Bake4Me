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
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import axios from 'axios';

const {height, width} = Dimensions.get('window');
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export class Signup extends Component {
  signup = (email, password) => {
    let params = {
      email,
      password,
    };
    let options = {
      responseType: 'json',
    };

    axios
      .post(`http://localhost:3000/api/v1/auth/sign-up`, params, options)
      .then(response => {
        const {data} = response;
        if (
          data.message !==
          'A user with the given username is already registered'
        ) {
          this.props.navigation.navigate('Profile');
        } else {
          const {message} = data;
        }
      })
      .catch(error => {
        console.log('The response' + JSON.stringify(error));
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
                    secureTextEntry={true}
                    textContentType="password"
                  />
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.message}
                  </Text>
                  <Button
                    title="REGISTER"
                    titleStyle={{fontWeight: 'bold'}}
                    buttonStyle={{backgroundColor: '#C50069'}}
                    containerStyle={{padding: 10}}
                    onPress={handleSubmit}
                  />
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

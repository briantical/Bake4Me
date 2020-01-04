import React, {Component} from 'react';
import {SafeAreaView, Text, View, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const {height, width} = Dimensions.get('window');

export class Login extends Component {
  login = (email, password) => {
    let params = {
      email,
      password,
    };
    let options = {
      responseType: 'json',
    };

    axios
      .post(`http://localhost:3000/api/v1/auth/sign-in`, params, options)
      .then(async response => {
        const {
          data: {token},
        } = response;
        this.props.navigation.navigate('Drawer');
        await AsyncStorage.setItem(('token', token));
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
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.message = 'Invalid email address';
      } else if (!values.password) {
        errors.message = 'Password is required';
      } else if (values.password.length < 7) {
        errors.message = 'Password is short';
      }
      return errors;
    };

    return (
      <SafeAreaView>
        <ScrollView
          keyboardDismissMode="interactive"
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
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
                  secureTextEntry={true}
                  textContentType="password"
                />
                <Text style={{color: 'red', alignSelf: 'center'}}>
                  {errors.message}
                </Text>
                <Button
                  title="LOGIN"
                  titleStyle={{fontWeight: 'bold'}}
                  buttonStyle={{backgroundColor: '#C50069'}}
                  containerStyle={{padding: 10}}
                  onPress={handleSubmit}
                />
                <Text
                  style={{color: '#C50069', alignSelf: 'center'}}
                  onPress={() => this.props.navigation.navigate('Signup')}>
                  Create Account
                </Text>
              </View>
            )}
          </Formik>
        </ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 20,
          }}>
          <Text style={{color: '#C50069'}}>Bake4Me</Text>
          <Text style={{color: '#C50069'}}>All rights reserved 2020</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

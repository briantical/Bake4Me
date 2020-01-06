import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import {Formik} from 'formik';
import {Header, Icon, Input, Button, CheckBox} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import {setToken, setUser} from '_actions';

export class Profile extends Component {
  componentDidMount() {
    let {setToken} = this.props;
    AsyncStorage.getItem('token', (error, result) => {
      if (error) {
        console.log(error);
        return error;
      }
      setToken(result);
    });
  }

  //Create the user cart
  createCart = values => {
    let {token} = this.props;

    Keyboard.dismiss();
    let {payment, fullName, phoneNumber, userName, address} = values;

    let data = {payment};
    let options = {
      responseType: 'json',
    };

    let headers = {
      Authorization: 'Bearer ' + token,
    };

    axios
      .post(`http://localhost:3000/api/v1/cart/`, data, {headers}, options)
      .then(response => {
        let {
          cart: {_id},
        } = response.data;
        let cart = _id;
        let avatar = 'some image';
        this.completeProfile({
          fullName,
          avatar,
          phoneNumber,
          userName,
          address,
          cart,
        });
      })
      .catch(error => {
        //console.log(error);
        console.log(error);
      });
  };

  //Complete the user profile
  completeProfile = data => {
    let {token} = this.props;

    let options = {
      responseType: 'json',
    };

    let headers = {
      Authorization: 'Bearer ' + token,
    };

    axios
      .put(`http://localhost:3000/api/v1/user/update`, data, {headers}, options)
      .then(response => {
        const {user} = response.data;
        this.props.navigation.navigate('Drawer');
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    // Synchronous validation
    const validate = values => {
      const errors = {};

      if (!values.fullName) {
        errors.message = 'First name is required';
      } else if (!values.userName) {
        errors.message = 'Username is required';
      } else if (!values.phoneNumber) {
        errors.message = 'Phone number is required';
      } else if (values.phoneNumber.length < 10) {
        errors.message = 'Invalid phone number';
      } else if (!values.payment) {
        errors.message = 'Payment method is required';
      } else if (!values.address) {
        errors.message = 'Address is required';
      }

      return errors;
    };

    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <View style={{flex: 1}}>
            <Formik
              initialValues={{
                fullName: '',
                userName: '',
                phoneNumber: '',
                address: '',
                payment: '',
              }}
              onSubmit={values => this.createCart(values)}
              validate={values => validate(values)}>
              {({handleChange, handleSubmit, errors}) => (
                <View style={{marginTop: 20, justifyContent: 'flex-end'}}>
                  <Header
                    backgroundColor="#C50069"
                    leftComponent={
                      <Icon
                        name="arrow-back"
                        color="#fff"
                        onPress={() => this.props.navigation.goBack()}
                      />
                    }
                    centerComponent={{
                      text: 'Complete Profile',
                      style: {color: '#fff', fontWeight: 'bold'},
                    }}
                  />
                  <Input
                    label="Full Name"
                    placeholder="fullname"
                    autoCapitalize="none"
                    textContentType="name"
                    onChangeText={handleChange('fullName')}
                  />
                  <Input
                    label="Username"
                    placeholder="@username"
                    autoCapitalize="none"
                    textContentType="username"
                    onChangeText={handleChange('userName')}
                  />
                  <Input
                    label="Email"
                    disabled={true}
                    value="lutbrianivan@gmail.com"
                    textContentType="emailAddress"
                  />
                  <Input
                    label="Mobile number"
                    autoCapitalize="none"
                    placeholder="(+256) 07000000"
                    textContentType="telephoneNumber"
                    onChangeText={handleChange('phoneNumber')}
                  />
                  <Input
                    label="Payment choice"
                    autoCapitalize="none"
                    placeholder="Mobile money"
                    onChangeText={handleChange('payment')}
                  />
                  <Input
                    label="Address"
                    placeholder="Bbunga"
                    autoCapitalize="none"
                    textContentType="addressCity"
                    onChangeText={handleChange('address')}
                  />
                  {/* Display the validation messages */}
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {errors.message}
                  </Text>

                  <Button
                    title="COMPLETE"
                    titleStyle={{fontWeight: 'bold'}}
                    buttonStyle={{backgroundColor: '#C50069'}}
                    containerStyle={{padding: 10}}
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

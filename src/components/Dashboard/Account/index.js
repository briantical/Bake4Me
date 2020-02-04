import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import {Header, Icon, Input, CheckBox} from 'react-native-elements';
import axios from 'axios';
import {API_URL} from 'react-native-dotenv';
import {clearData} from '_utils';

export class Account extends Component {
  constructor() {
    super();
    this.state = {
      checked: true,
    };
  }
  logout = () => {
    let {token} = this.props;

    let headers = {
      Authorization: 'Bearer ' + token,
    };

    axios
      .post(`${API_URL}/api/v1/auth/sign-out`, null, {headers})
      .then(() => {
        //Previous user incomplete user will be overwritten
        //in Asyncstorage and state

        clearData();
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let {
      user: {
        email,
        profile: {fullName, location, phoneNumber, userName, payment},
      },
    } = this.props;

    return (
      <SafeAreaView>
        <View>
          <Header
            backgroundColor="#C50069"
            leftComponent={
              <Icon
                name="menu"
                color="#fff"
                onPress={() =>
                  this.props.navigation.dispatch(DrawerActions.openDrawer())
                }
              />
            }
            centerComponent={{
              text: 'Account',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
            rightComponent={{
              text: 'Log Out',
              style: {color: '#fff', fontWeight: 'bold'},
              onPress: () => this.logout(),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>Your account details</Text>
            <Text
              style={{color: '#C50069', fontWeight: 'bold'}}
              onPress={() => this.props.navigation.navigate('Profile')}>
              Edit
            </Text>
          </View>
          <Input
            label="Full Name"
            value={fullName}
            autoCapitalize="none"
            textContentType="name"
            disabled={true}
          />
          <Input
            label="Username"
            value={userName}
            autoCapitalize="none"
            textContentType="username"
            disabled={true}
          />
          <Input
            label="Email"
            disabled={true}
            value={email}
            textContentType="emailAddress"
            disabled={true}
          />
          <Input
            label="Mobile number"
            autoCapitalize="none"
            value={phoneNumber}
            textContentType="telephoneNumber"
            disabled={true}
          />
          <Input
            label="Payment choice"
            autoCapitalize="none"
            value={payment}
            disabled={true}
          />
          <Input
            label="Address"
            value={location}
            maxLength={10}
            disabled={true}
          />
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              title="Click Here"
              checked={this.state.checked}
              checkedColor="#C50069"
              title="Yes, I want to recieve the Newsletter"
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
              onPress={() => {
                this.setState({checked: !this.state.checked});
              }}
            />
          </View>
          <View style={{alignItems: 'center', padding: 10}}>
            <Text
              style={{color: '#C50069'}}
              onPress={() => this.props.navigation.navigate('ChangePassword')}>
              Change Password
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {user, token} = state;
  return {user, token};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

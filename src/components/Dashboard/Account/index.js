import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import {Header, Icon, Input, CheckBox} from 'react-native-elements';

export class Account extends Component {
  render() {
    let {
      user: {
        email,
        profile: {fullName, location, phoneNumber, userName},
        cart: {payment},
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
              checked={true}
              checkedColor="#C50069"
              title="Yes, I want to recieve the Newsletter"
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
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
  const {user} = state;
  return {user};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

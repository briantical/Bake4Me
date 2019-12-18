import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import {Header, Icon, Input} from 'react-native-elements';

export class Account extends Component {
  render() {
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
              text: 'LOG OUT',
              style: {color: '#fff'},
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>Your account details</Text>
            <Text style={{color: '#C50069'}}>Edit</Text>
          </View>
          <Input label="First name" placeholder="Lutaaya" />
          <Input label="Last name" placeholder="Brian Ivan" />
          <Input label="Email" placeholder="lutbrianivan@gmail.com" />
          <Input label="Mobile number" placeholder="+256 789566944" />
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                marginRight: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}></View>
            <Text>Yes, I want to recieve the Newsletter</Text>
          </View>
          <View style={{alignItems: 'center', padding: 10}}>
            <Text style={{color: '#C50069'}}>Change Password</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

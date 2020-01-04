import React, {Component} from 'react';
import {SafeAreaView, Text, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Input, Button, CheckBox} from 'react-native-elements';

const {height, width} = Dimensions.get('window');

export class Profile extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{height}}>
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

          <View style={{marginTop: 20}}>
            <Input
              label="Username"
              placeholder="username"
              textContentType="username"
            />
            <Input
              label="First name"
              placeholder="firstname"
              textContentType="name"
            />
            <Input
              label="Surname"
              placeholder="surname"
              textContentType="name"
            />
            <Input
              label="Email"
              placeholder="lutbrianivan@gmail.com"
              disabled={true}
              textContentType="emailAddress"
              leftIcon={{name: 'email'}}
            />
            <Input
              label="Mobile number"
              placeholder="+256 7000000"
              textContentType="telephoneNumber"
              leftIcon={{name: 'phone'}}
            />
            <Input
              label="Address"
              placeholder="Bbunga"
              textContentType="addressCity"
              leftIcon={{name: 'add-location'}}
            />
          </View>

          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              title="Click Here"
              checked={false}
              title="Yes, I want to recieve the Newsletter"
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

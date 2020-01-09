import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import {Header, Input, Button, Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import GetLocation from 'react-native-get-location';

import {setUser} from '_actions';

let {height} = Dimensions.get('window');

export class Delivery extends Component {
  componentDidMount() {
    let {setUser} = this.props;
    AsyncStorage.getItem('user', (error, result) => {
      if (error) {
        return error;
      }
      setUser(JSON.parse(result));
    });
  }

  //Get current user location
  getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  render() {
    let {
      user: {
        profile: {location},
      },
    } = this.props;

    return (
      <SafeAreaView>
        <View style={{height}}>
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
              text: 'Delivery Location',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('City');
            }}>
            <Input label="City" placeholder="Kampala" disabled={true} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Area', {})}>
            <Input label="Area" placeholder={location} disabled={true} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', padding: 5}}
            onPress={() => this.getLocation()}>
            <Icon name="find" type="antdesign" color="#C50069" />
            <Text style={{color: '#C50069', paddingLeft: 10}}>
              Use my currrent location
            </Text>
          </TouchableOpacity>
          <Button
            title="See Vendor"
            buttonStyle={{backgroundColor: '#C50069'}}
            containerStyle={{padding: 10}}
            onPress={() => this.props.navigation.navigate('_Vendor')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  let {user} = state;
  return {user};
};

const mapDispatchToProps = {setUser};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);

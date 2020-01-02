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

let {height} = Dimensions.get('window');

export class Delivery extends Component {
  render() {
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
              style: {color: '#fff'},
            }}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('City')}>
            <Input label="City" placeholder="Kampala" disabled={true} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Area', {})}>
            <Input label="Area" placeholder="Bbunga" disabled={true} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);

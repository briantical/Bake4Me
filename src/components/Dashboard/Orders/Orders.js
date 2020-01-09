import React, {Component} from 'react';
import {SafeAreaView, Text, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Button} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';
import {NoOrders} from '_components';

let order;
let {height, width} = Dimensions.get('window');

export class Orders extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
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
              text: 'Your Recent Orders',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
          />
          <View style={{flex: 1}}>
            {this.orders ? (
              'Hey'
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Icon
                  name="page"
                  type="foundation"
                  size={100}
                  color="rgb(224,224,224)"
                />
                <Text>No orders yet ..</Text>
                <Text style={{color: 'rgb(224,224,224)'}}>
                  Once you place an order it'll show here
                </Text>
              </View>
            )}
          </View>

          <Button
            title="See Vendor"
            buttonStyle={{backgroundColor: '#C50069'}}
            containerStyle={{
              padding: 10,
              alignSelf: 'center',
              width,
              bottom: 20,
              position: 'absolute',
            }}
            onPress={() =>
              this.props.navigation.navigate('_Vendor', {show: false})
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

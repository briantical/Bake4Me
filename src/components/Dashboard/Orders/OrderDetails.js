import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Header, Icon, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';

import {removeCartItems, removeCartItem} from '_actions';

var {height} = Dimensions.get('window');

export class OrderDetails extends Component {
  render() {
    let {cart} = this.props;
    let totalprice = cart.reduce(function(prev, cur) {
      return prev + cur.count * cur.price;
    }, 0);

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
              text: 'Order Details',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
          />
          {cart.map((content, index) => {
            let {count, description, id, name, price} = content;

            return (
              <TouchableOpacity
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                key={index}
                onPress={() => {
                  this.props.navigation.navigate('Cart', {
                    content,
                    exists: true,
                  });
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold', fontSize: 15}}>
                        {count + 'x '}
                      </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 15}}>
                        {name}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text>{'Ushs. ' + price * count}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{description}</Text>
                  </View>
                </View>
                <Icon
                  name="closecircleo"
                  type="antdesign"
                  color="#C50069"
                  iconStyle={{}}
                  onPress={() => this.props.removeCartItem(id)}
                />
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={{flexDirection: 'row', padding: 10}}
            onPress={() => this.props.navigation.navigate('_Vendor')}>
            <Text style={{fontSize: 16, color: '#C50069'}}>+</Text>
            <Text style={{fontSize: 16, color: '#C50069'}}>Add Items</Text>
          </TouchableOpacity>

          <View style={{padding: 10, justifyContent: 'space-between'}}>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Subtotal</Text>
                <Text>{'Ushs. ' + totalprice}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Convinience Fee</Text>
                <Text>Free</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Delivery Fee</Text>
                <Text>{'Ushs. ' + 5000}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Total</Text>
              <Text>{'Ushs. ' + totalprice}</Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <Input label="Comments (Optional)" />
          </View>

          <Button
            title="PROCEED TO CHECKOUT"
            buttonStyle={{backgroundColor: '#C50069'}}
            containerStyle={{padding: 10, flex: 1}}
            onPress={() => this.props.navigation.navigate('Checkout')}
          />
          <Button
            buttonStyle={{
              borderColor: '#C50069',
              borderRadius: 50,
              borderWidth: StyleSheet.hairlineWidth,
            }}
            title="CANCEL ORDER"
            titleStyle={{color: '#C50069'}}
            type="outline"
            containerStyle={{
              margin: 10,
              flex: 1,
            }}
            onPress={() => {
              this.props.removeCartItems();
              this.props.navigation.navigate('_Vendor', {show: false});
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {cart} = state;
  return {cart};
};

const mapDispatchToProps = {removeCartItems, removeCartItem};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);

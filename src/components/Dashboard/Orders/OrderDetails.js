import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Header, Icon, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import axios from 'axios';

import {API_URL} from '_utils';

import {removeCartItems, removeCartItem} from '_actions';

let {height, width} = Dimensions.get('window');

//The delivery fee
const delivery_fee = 5000;

//The convinience fee
const convinience_fee = 0;

export class OrderDetails extends Component {
  constructor() {
    super();
    this.state = {
      comments: '',
      loading: false,
    };
  }
  updateCart = () => {
    let {token} = this.props;

    let options = {
      responseType: 'json',
    };

    let headers = {
      Authorization: 'Bearer ' + token,
    };

    let data = this.props.cart;

    let {
      cart: {_id},
    } = this.props.user;

    axios
      .put(`${API_URL}/api/v1/cart/${_id}`, data, {headers}, options)
      .then(response => {
        console.log('Cart updated');
        this.makeOrder();
      })
      .catch(error => {
        console.log(error);
      });
  };

  makeOrder = () => {
    let {token} = this.props;

    let {
      _id: customer,
      profile: {location: deliveryAddress},
      cart: cart_Id,
    } = this.props.user;

    let orderDate = new Date();
    let orderStatus = 'Pending';
    let {comments} = this.state;

    let data = {
      customer,
      cart: cart_Id,
      comments,
      orderDate,
      orderStatus,
      deliveryAddress,
    };
    let options = {
      responseType: 'json',
    };

    let headers = {
      Authorization: 'Bearer ' + token,
    };

    axios
      .post(`${API_URL}/api/v1/order/`, data, {headers}, options)
      .then(response => {
        console.log('Order has been initiated');
        this.props.removeCartItems();
        this.props.navigation.navigate('Checkout');
      })
      .catch(error => {
        console.log('The response' + JSON.stringify(error));
      });
  };

  checkout = () => {
    this.setState({loading: true});
    this.updateCart();
  };

  render() {
    let {cart} = this.props;
    let totalprice = cart.reduce(function(prev, cur) {
      return delivery_fee + convinience_fee + prev + cur.count * cur.price;
    }, 0);

    let subtotal = cart.reduce(function(prev, cur) {
      return prev + cur.count * cur.price;
    }, 0);

    let {comments, loading} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
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
        <ScrollView style={{flex: 1}} keyboardDismissMode="on-drag">
          <View style={{height, width}}>
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
                  <View style={{width: '90%'}}>
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
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Subtotal</Text>
                  <Text>{'Ushs. ' + subtotal}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Convinience Fee</Text>
                  <Text>{convinience_fee != 0 ? convinience_fee : 'Free'}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Delivery Fee</Text>
                  <Text>{'Ushs. ' + delivery_fee}</Text>
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
              <Input
                label="Comments (Required)"
                placeholder="No comments available"
                value={comments}
                onChangeText={value => this.setState({comments: value})}
              />
            </View>
            {loading ? (
              <Button
                buttonStyle={{backgroundColor: '#C50069'}}
                loading
                containerStyle={{padding: 10, flex: 1}}
              />
            ) : (
              <Button
                title="PROCEED TO CHECKOUT"
                buttonStyle={{backgroundColor: '#C50069'}}
                containerStyle={{padding: 10, flex: 1}}
                onPress={() => this.checkout()}
                disabled={cart.length <= 0}
              />
            )}

            {loading ? (
              <Button
                buttonStyle={{
                  borderColor: '#C50069',
                  backgroundColor: '#C50069',
                  borderRadius: 50,
                  borderWidth: StyleSheet.hairlineWidth,
                }}
                loading
                containerStyle={{margin: 10, flex: 1}}
              />
            ) : (
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
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {cart, token, user} = state;
  return {cart, token, user};
};

const mapDispatchToProps = {removeCartItems, removeCartItem};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);

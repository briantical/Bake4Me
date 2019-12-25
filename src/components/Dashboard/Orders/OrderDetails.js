import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Header, Icon, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';

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
          {cart.map((item, index) => {
            let {count, description, id, image, name, price} = item;
            return (
              <View
                style={{padding: 10, justifyContent: 'space-between'}}
                key={index}>
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
                    <Text>{price * count}</Text>
                    <Text>Ush</Text>
                  </View>
                </View>
                <View>
                  <Text>{description}</Text>
                </View>
              </View>
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
                <Text>{totalprice + ' Ush'}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Convinience Fee</Text>
                <Text>Free</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Delivery Fee</Text>
                <Text>Free</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Total</Text>
              <Text>{totalprice + ' Ush'}</Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <Input label="Comments (Optional)" />
          </View>

          <Button
            title="PROCEED TO CHECKOUT"
            buttonStyle={{backgroundColor: '#C50069'}}
            containerStyle={{padding: 10, flex: 1}}
            onPress={() => this.props.navigation.navigate('Vendor')}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);

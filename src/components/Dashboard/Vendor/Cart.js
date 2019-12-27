import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Button, Icon} from 'react-native-elements';

import {
  setCount,
  setCartItems,
  updateCartItems,
  increaseCount,
  decreaseCount,
} from '_actions';

const width = Dimensions.get('window').width;

export class Cart extends Component {
  componentDidMount() {
    let {
      setCount,
      navigation: {
        state: {
          params: {
            content: {count},
            exists,
          },
        },
      },
    } = this.props;

    exists ? setCount(count) : setCount(1);
  }

  setOrder = () => {
    let {
      setCartItems,
      updateCartItems,
      count,
      navigation: {
        state: {
          params: {
            content: {id, name, description, image, price},
            exists,
          },
        },
      },
    } = this.props;

    exists
      ? updateCartItems({count, id, name, description, image, price})
      : setCartItems({count, id, name, description, image, price});

    this.props.navigation.navigate('_Vendor', {
      show: true,
    });
  };

  render() {
    let {
      increaseCount,
      decreaseCount,
      count,
      navigation: {
        state: {
          params: {
            content: {id, name, description, image, price, itemcount},
            exists = false,
          },
        },
      },
    } = this.props;

    return (
      <SafeAreaView>
        <View style={{padding: 10, position: 'relative', zIndex: 0}}>
          <Icon
            name="closecircleo"
            type="antdesign"
            color="#C50069"
            iconStyle={{zIndex: 2, position: 'absolute', top: 5, left: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <View style={{zIndex: -1}}>
            <Image
              source={(require = image)}
              style={{height: 80, width: width - 10, zIndex: -1}}
            />
          </View>
          <View style={{justifyContent: 'space-between', marginBottom: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>{name}</Text>
              <Text>{price}Ush</Text>
            </View>
            <Text>{description}</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>
              How would you like your cake?
            </Text>
            <Text>Required</Text>
            <Text>Options</Text>
            <Text>Select one</Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text>X</Text>
                <Text>Strawberry</Text>
                <Text>0 Ush</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>X</Text>
                <Text>Vanilla</Text>
                <Text>0 Ush</Text>
              </View>
            </View>
          </View>

          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>
              Would you like to add a drink? Options
            </Text>
            <Text>Optional</Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text>X</Text>
                <Text>Coke 2Ltr</Text>
                <Text>7000 Ush</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>X</Text>
                <Text>Fanta 2Ltr</Text>
                <Text>7000 Ush</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>X</Text>
                <Text>Sprite 2Ltr</Text>
                <Text>7000 Ush</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>X</Text>
                <Text>Stoney 2Ltr</Text>
                <Text>7000 Ush</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 200,
                justifyContent: 'space-around',
              }}>
              <Text
                style={{color: '#C50069', fontSize: 30}}
                onPress={() => decreaseCount(count)}>
                -
              </Text>
              <Text style={{fontSize: 25}}>{count}</Text>
              <Text
                style={{color: '#C50069', fontSize: 30}}
                onPress={() => increaseCount(count)}>
                +
              </Text>
            </View>
            <Button
              title={exists ? 'UPDATE CART' : 'ADD TO CART'}
              buttonStyle={{backgroundColor: '#C50069'}}
              containerStyle={{padding: 10}}
              onPress={() => this.setOrder()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {count} = state;
  return {count};
};

const mapDispatchToProps = {
  setCartItems,
  updateCartItems,
  setCount,
  increaseCount,
  decreaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Button, Icon, CheckBox} from 'react-native-elements';

import {
  setCount,
  setCartItems,
  updateCartItems,
  increaseCount,
  decreaseCount,
} from '_actions';

const width = Dimensions.get('window').width;

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      required: {},
      optional: {},
    };
  }
  componentDidMount() {
    let {
      setCount,
      cart,
      navigation: {
        state: {
          params: {
            content: {id},
            exists,
          },
        },
      },
    } = this.props;

    let cartitem = exists ? cart.filter(item => item.id == id) : [];
    let count = cartitem.length != 0 ? cartitem[0].count : 1;

    exists && cart.some(item => item.id == id) ? setCount(count) : setCount(1);
  }

  setOrder = () => {
    let {
      setCartItems,
      updateCartItems,
      count,
      navigation: {
        state: {
          params: {
            content: {id, name, description, image, price, required, options},
            exists,
          },
        },
      },
    } = this.props;

    exists
      ? updateCartItems({
          count,
          id,
          name,
          description,
          image,
          price,
          required,
          options,
        })
      : setCartItems({
          count,
          id,
          name,
          description,
          image,
          price,
          required,
          options,
        });

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
            content: {id, name, description, image, price, required, options},
            exists = false,
          },
        },
      },
    } = this.props;

    let {state} = this;

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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>
                How would you like your cake?
              </Text>
              <Text>Required</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Options</Text>
              <Text style={{marginLeft: 10}}>Select one</Text>
            </View>
            <View>
              {required.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      checked={item.name == state.required.name}
                      checkedColor="#C50069"
                      title={item.name}
                      containerStyle={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      onPress={() => {
                        this.setState({
                          required: {name: item.name, marked: true},
                        });
                      }}
                    />
                    <Text>{item.cost + ' Ush'}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>
              Would you like to add a drink? Options
            </Text>
            <Text>Optional</Text>
            <View>
              {options.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      checked={item.name == state.optional.name}
                      checkedColor="#C50069"
                      title={item.name}
                      containerStyle={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      onPress={() => {
                        this.setState({
                          optional: {name: item.name, marked: true},
                        });
                      }}
                    />
                    <Text>{item.cost + ' Ush'}</Text>
                  </View>
                );
              })}
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
  const {count, cart} = state;
  return {count, cart};
};

const mapDispatchToProps = {
  setCartItems,
  updateCartItems,
  setCount,
  increaseCount,
  decreaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Button, Icon, CheckBox} from 'react-native-elements';

import {
  setCount,
  setCartItems,
  updateCartItems,
  increaseCount,
  decreaseCount,
} from '_actions';

const {height, width} = Dimensions.get('window');

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
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
            content: {id, name, description, images, price, required, options},
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
          images,
          price,
          required,
          options,
        })
      : setCartItems({
          count,
          id,
          name,
          description,
          images,
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
            content,
            content: {
              id,
              name,
              description,
              images,
              price,
              required: {shapes, tiers, flavours, colours, weight},
              options: {drinks},
            },
            exists = false,
          },
        },
      },
    } = this.props;

    let required = [{shapes}, {tiers}, {flavours}, {colours}, {weight}];
    let options = [{drinks}];
    console.log(content);
    return (
      <SafeAreaView>
        <View style={{padding: 10, position: 'relative', zIndex: 0, height}}>
          <Icon
            name="closecircleo"
            type="antdesign"
            color="#C50069"
            iconStyle={{zIndex: 2, position: 'absolute', top: 5, left: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <View style={{zIndex: -1}}>
            <Image
              source={
                typeof images[0] == 'string'
                  ? {uri: images[0]}
                  : require('_assets/default_cake.png')
              }
              style={{height: 80, width: width - 10, zIndex: -1}}
            />
            <View style={{justifyContent: 'space-between', marginBottom: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>{name}</Text>
                <Text>{price}Ush</Text>
              </View>
              <Text>{description}</Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                        marginBottom: 10,
                        borderBottomColor: 'grey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                      }}>
                      {Object.values(item).map((innerItem, innerIndex) => {
                        let itemname =
                          Object.keys(item)
                            .toString()
                            .charAt(0)
                            .toUpperCase() +
                          Object.keys(item)
                            .toString()
                            .slice(1);
                        return (
                          <View key={innerIndex}>
                            <Text style={{fontWeight: 'bold'}}>{itemname}</Text>
                            {innerItem.map((innermost, innermostindex) => {
                              return (
                                <CheckBox
                                  key={innermostindex}
                                  checked={
                                    typeof this.state[`${itemname}`] ==
                                    'undefined'
                                      ? null
                                      : this.state[`${itemname}`].includes(
                                          innermost,
                                        )
                                  }
                                  checkedColor="#C50069"
                                  title={innermost.toString()}
                                  containerStyle={{
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                  }}
                                  onPress={() => {
                                    this.setState({
                                      [itemname]: `{name: ${innermost.toString()}, marked: true}`,
                                    });
                                  }}
                                />
                              );
                            })}
                          </View>
                        );
                      })}
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
                      {Object.values(item).map((innerItem, innerIndex) => {
                        let itemname =
                          innerItem.length == 0
                            ? 'No options available for this offer'
                            : Object.keys(item)
                                .toString()
                                .charAt(0)
                                .toUpperCase() +
                              Object.keys(item)
                                .toString()
                                .slice(1);

                        return (
                          <View key={innerIndex}>
                            <Text style={{fontWeight: 'bold'}}>{itemname}</Text>
                            {innerItem.map((innermost, innermostindex) => {
                              return (
                                <View
                                  key={innermostindex}
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}>
                                  <CheckBox
                                    key={innermostindex}
                                    checked={
                                      typeof this.state[`${itemname}`] ==
                                      'undefined'
                                        ? null
                                        : this.state[`${itemname}`].includes(
                                            innermost.name,
                                          )
                                    }
                                    checkedColor="#C50069"
                                    title={innermost.name}
                                    containerStyle={{
                                      backgroundColor: 'transparent',
                                      borderColor: 'transparent',
                                    }}
                                    onPress={() => {
                                      this.setState({
                                        [itemname]: `{name: ${innermost.name}, marked: true}`,
                                      });
                                    }}
                                  />
                                  <Text>{'Ushs.' + innermost.cost}</Text>
                                </View>
                              );
                            })}
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
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

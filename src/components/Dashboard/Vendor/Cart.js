import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {Formik} from 'formik';
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
      id: '',
      errors: {},
      name: '',
      price: 0,
      description: '',
      images: '',
      count: 1,
      required: {},
      options: {},
    };
  }
  componentDidMount() {
    let {
      cart,
      navigation: {
        state: {
          params: {
            content: {id, name, price, description, images},
            exists,
          },
        },
      },
    } = this.props;

    this.setState({name});
    this.setState({price});
    this.setState({description});
    this.setState({id});
    this.setState({images});

    let cartitem = exists ? cart.filter(item => item.id == id) : [];
    let count = cartitem.length != 0 ? cartitem[0].count : 1;

    exists && cart.some(item => item.id == id)
      ? this.setState({count})
      : this.setState({count: 1});
  }

  setOrder = values => {
    let {required} = values;
    let stateKeys = Object.keys(required);
    if (!stateKeys.includes('shapes')) {
      this.setState({errors: {name: 'shapes', message: 'A shape is required'}});
    } else if (!stateKeys.includes('tiers')) {
      this.setState({errors: {name: 'tiers', message: 'Tiers are required'}});
    } else if (!stateKeys.includes('flavours')) {
      this.setState({
        errors: {name: 'flavours', message: 'A flavour is required'},
      });
    } else if (!stateKeys.includes('colours')) {
      this.setState({
        errors: {name: 'colours', message: 'A colour is required'},
      });
    } else if (!stateKeys.includes('weight')) {
      this.setState({errors: {name: 'weight', message: 'Weight is required'}});
    } else {
      this.setState({errors: {}});
      let {
        setCartItems,
        updateCartItems,
        navigation: {
          state: {
            params: {exists},
          },
        },
      } = this.props;

      let {
        id,
        name,
        description,
        images,
        price,
        required: {shapes, tiers, flavours, colours, weight},
        options: {drinks},
      } = values;

      let {
        state: {count},
      } = this;

      exists
        ? updateCartItems({
            count,
            id,
            name,
            description,
            images,
            price,
            required: {
              shapes: [shapes.name],
              tiers: [tiers.name],
              flavours: [flavours.name],
              colours: [colours.name],
              weight: [weight.name],
            },
            options: {
              drinks: [drinks],
            },
          })
        : setCartItems({
            count,
            id,
            name,
            description,
            images,
            price,
            required: {
              shapes: [shapes.name],
              tiers: [tiers.name],
              flavours: [flavours.name],
              colours: [colours.name],
              weight: [weight.name],
            },
            options: {
              drinks: [drinks],
            },
          });

      this.props.navigation.navigate('_Vendor', {
        show: true,
      });
    }
  };

  render() {
    let {
      navigation: {
        state: {
          params: {
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

    let {
      state,
      state: {count},
    } = this;

    return (
      <SafeAreaView style={{width, height}}>
        <View
          style={{padding: 10, position: 'relative', zIndex: 0, height, width}}>
          {Platform.OS == 'android' ? null : (
            <Icon
              name="closecircleo"
              type="antdesign"
              color="#C50069"
              iconStyle={{zIndex: 2, position: 'absolute', top: 5, left: 10}}
              onPress={() => this.props.navigation.goBack()}
            />
          )}
          <View style={{zIndex: -1}}>
            <Image
              source={
                typeof images[0] == 'string'
                  ? {uri: images[0]}
                  : require('_assets/default_cake.png')
              }
              style={{height: 80, zIndex: -1}}
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
          <Formik
            initialValues={{
              ...state,
            }}
            onSubmit={values => this.setOrder(state)}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View style={{flex: 1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{marginBottom: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
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
                            {Object.values(item).map(
                              (innerItem, innerIndex) => {
                                let itemtitle =
                                  Object.keys(item)
                                    .toString()
                                    .charAt(0)
                                    .toUpperCase() +
                                  Object.keys(item)
                                    .toString()
                                    .slice(1);
                                let state_property = Object.keys(
                                  item,
                                ).toString();
                                return (
                                  <View key={innerIndex}>
                                    <Text style={{fontWeight: 'bold'}}>
                                      {itemtitle}
                                    </Text>
                                    {innerItem.map(
                                      (innermost, innermostindex) => {
                                        return (
                                          <CheckBox
                                            key={innermostindex}
                                            checked={
                                              typeof this.state.required[
                                                `${state_property}`
                                              ] == 'undefined'
                                                ? null
                                                : this.state.required[
                                                    `${state_property}`
                                                  ].name == innermost
                                                ? this.state.required[
                                                    `${state_property}`
                                                  ].marked
                                                : null
                                            }
                                            checkedColor="#C50069"
                                            title={innermost.toString()}
                                            containerStyle={{
                                              backgroundColor: 'transparent',
                                              borderColor: 'transparent',
                                            }}
                                            onPress={() => {
                                              this.setState({
                                                required: {
                                                  ...this.state.required,
                                                  [state_property]: {
                                                    name: `${innermost.toString()}`,
                                                    marked: true,
                                                  },
                                                },
                                              });
                                            }}
                                          />
                                        );
                                      },
                                    )}
                                    <Text
                                      style={{
                                        color: 'red',
                                        alignSelf: 'center',
                                      }}>
                                      {this.state.errors.name == state_property
                                        ? this.state.errors.message
                                        : null}
                                    </Text>
                                  </View>
                                );
                              },
                            )}
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
                            {Object.values(item).map(
                              (innerItem, innerIndex) => {
                                let itemtitle =
                                  innerItem.length == 0
                                    ? 'No options available for this offer'
                                    : Object.keys(item)
                                        .toString()
                                        .charAt(0)
                                        .toUpperCase() +
                                      Object.keys(item)
                                        .toString()
                                        .slice(1);
                                let state_property = Object.keys(
                                  item,
                                ).toString();
                                return (
                                  <View key={innerIndex}>
                                    <Text style={{fontWeight: 'bold'}} on>
                                      {itemtitle}
                                    </Text>
                                    {innerItem.map(
                                      (innermost, innermostindex) => {
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
                                                typeof this.state.options[
                                                  `${state_property}`
                                                ] == 'undefined'
                                                  ? null
                                                  : this.state.options[
                                                      `${state_property}`
                                                    ].name == innermost.name
                                                  ? this.state.options[
                                                      `${state_property}`
                                                    ].marked
                                                  : null
                                              }
                                              checkedColor="#C50069"
                                              title={innermost.name}
                                              containerStyle={{
                                                backgroundColor: 'transparent',
                                                borderColor: 'transparent',
                                              }}
                                              onPress={() => {
                                                this.setState({
                                                  options: {
                                                    ...this.state.options,
                                                    [state_property]: {
                                                      name: `${innermost.name}`,
                                                      cost: `${innermost.cost}`,
                                                      marked: true,
                                                    },
                                                  },
                                                });
                                              }}
                                            />
                                            <Text>
                                              {'Ushs.' + innermost.cost}
                                            </Text>
                                          </View>
                                        );
                                      },
                                    )}
                                  </View>
                                );
                              },
                            )}
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
                    margin: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 4,
                      justifyContent: 'space-around',
                    }}>
                    <Text
                      style={{color: '#C50069', fontSize: 30}}
                      onPress={() =>
                        count <= 1 ? null : this.setState({count: --count})
                      }>
                      -
                    </Text>
                    <Text style={{fontSize: 25}}>{count}</Text>
                    <Text
                      style={{color: '#C50069', fontSize: 30}}
                      onPress={() => this.setState({count: ++count})}>
                      +
                    </Text>
                  </View>
                  <Button
                    title={exists ? 'UPDATE CART' : 'ADD TO CART'}
                    buttonStyle={{backgroundColor: '#C50069'}}
                    containerStyle={{padding: 10}}
                    onPress={() => handleSubmit()}
                  />
                </View>
              </View>
            )}
          </Formik>
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

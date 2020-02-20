import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Tile} from 'react-native-elements';

const {width, height} = Dimensions.get('window');
const address = require('_assets/address.png');
const bake4me_image = require('_assets/bake4me.png');

export class About extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          backgroundColor="#C50069"
          leftComponent={
            <Icon
              name="arrow-back"
              color="#fff"
              onPress={() => {
                this.props.navigation.navigate('_Vendor');
              }}
            />
          }
          centerComponent={{
            text: 'About',
            style: {color: '#fff', fontWeight: 'bold'},
          }}
        />
        <ScrollView style={{}}>
          <View
            style={{
              width,
              height: 200,
              padding: 5,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={(require = bake4me_image)}
              resizeMode="cover"
              style={{height: '100%', width: '100%'}}
            />
            <View
              style={{
                alignSelf: 'center',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'rgb(42,203,178)', fontSize: 30}}>
                Bake4Me
              </Text>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
                Get all the cafectionery
              </Text>
            </View>
          </View>

          <View style={{flex: 16, padding: 10}}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Bake4Me </Text>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="star"
                  type="feather"
                  color="rgb(151,151,151)"
                  size={15}
                />
                <Text style={{color: 'rgb(151,151,151)'}}>
                  5.0 $ Min Order Ushs. 30,000 - Delivery fee Ushs. 5,000
                </Text>
              </View>

              <Text style={{color: 'rgb(151,151,151)'}}>Cakes - Snacks</Text>
            </View>
            <View
              style={{
                flex: 4,
                width,
                marginTop: 10,
              }}>
              <Image
                source={(require = address)}
                style={{resizeMode: 'cover', width: '100%'}}
              />
            </View>

            <View
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'space-evenly',
                borderBottomColor: 'rgb(151,151,151)',
                borderBottomWidth: 2,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Opening Hours
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingRight: 30,
                  color: 'rgb(151,151,151)',
                }}>
                <Text style={{color: 'rgb(151,151,151)'}}>
                  Monday - Thursday
                </Text>
                <Text style={{color: 'rgb(151,151,151)'}}>10:00 - 22:00</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingRight: 30,
                  color: 'rgb(151,151,151)',
                }}>
                <Text style={{color: 'rgb(151,151,151)'}}>Friday - Sunday</Text>
                <Text style={{color: 'rgb(151,151,151)'}}>10:00 - 23:00</Text>
              </View>
            </View>

            <View
              style={{
                flex: 2,
                marginTop: 20,
                justifyContent: 'space-evenly',
                borderBottomColor: 'rgb(151,151,151)',
                borderBottomWidth: 2,
              }}>
              <Text style={{fontWeight: 'bold'}}>Payment Methods</Text>
              <Text style={{color: 'rgb(151,151,151)'}}>Cash on delivery</Text>
              <Text style={{color: 'rgb(151,151,151)'}}>MTN Direct Pay</Text>
              <Text style={{color: 'rgb(151,151,151)'}}>
                Card Payment (Visa , Mastercard, Amex)
              </Text>
            </View>

            <View style={{flex: 6, marginTop: 20}}>
              <Text style={{fontWeight: 'bold'}}>Reviews</Text>
              <Text style={{color: 'rgb(151,151,151)', alignSelf: 'center'}}>
                No reviews available yet
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);

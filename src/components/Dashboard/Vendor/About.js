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

const height = Dimensions.get('window').height;
const address = require('_assets/address.png');

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
                this.props.navigation.navigate('Vendor');
              }}
            />
          }
        />
        <ScrollView style={{height}}>
          <Tile
            imageSrc={require('_assets/bake4me.png')}
            title="Bake4Me"
            featured
            caption="Get all the cafectionery"
            imageProps={{resizeMode: 'contain'}}
            titleStyle={{color: 'rgb(42,203,178)'}}
            captionStyle={{fontWeight: 'bold'}}></Tile>

          <View style={{flex: 16, height, padding: 10}}>
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
                  5.0 $ Min Order 10,000 Ush - Delivery fee 3,000 Ush
                </Text>
              </View>

              <Text style={{color: 'rgb(151,151,151)'}}>Cakes - Snacks</Text>
            </View>
            <View
              style={{
                flex: 4,
                marginTop: 10,
              }}>
              <Image source={(require = address)} style={{flex: 1}} />
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
              <Text style={{color: 'rgb(151,151,151)'}}>
                Card Payment (Visa , Mastercard, Amex)
              </Text>
              <Text style={{color: 'rgb(151,151,151)'}}>MTN Direct Pay</Text>
            </View>

            <View style={{flex: 6, marginTop: 20}}>
              <Text style={{fontWeight: 'bold'}}>Reviews</Text>
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

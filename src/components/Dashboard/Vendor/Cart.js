import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import {Button} from 'react-native-elements';

const image = require('_assets/cake1.jpg');

const width = Dimensions.get('window').width;

export class Cart extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{padding: 10}}>
          <View>
            <Image
              source={(require = image)}
              style={{height: 80, width: width - 10}}
            />
          </View>
          <View style={{justifyContent: 'space-between', marginBottom: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Cakey</Text>
              <Text>20,000 Ush</Text>
            </View>
            <Text>Those cakey stuff</Text>
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
              <Text style={{color: '#C50069', fontSize: 30}}>-</Text>
              <Text style={{fontSize: 25}}>1</Text>
              <Text style={{color: '#C50069', fontSize: 30}}>+</Text>
            </View>
            <Button
              title="ADD TO CART"
              buttonStyle={{backgroundColor: '#C50069'}}
              containerStyle={{padding: 10}}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

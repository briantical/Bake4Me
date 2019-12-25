import React, {Component} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';

export class NoOrders extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            name="page"
            type="foundation"
            size={100}
            color="rgb(224,224,224)"
          />
          <Text>No orders yet ..</Text>
          <Text style={{color: 'rgb(224,224,224)'}}>
            Once you place an order it'll show here
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NoOrders);

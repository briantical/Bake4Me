import React, {Component} from 'react';
import {SafeAreaView, Text, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Button} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';
import {NoOrders} from '_components';

var {height} = Dimensions.get('window');

export class Orders extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
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
              text: 'Your Recent Orders',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
          />
          <NoOrders />
          <Button
            title="See Vendor"
            buttonStyle={{backgroundColor: '#C50069'}}
            containerStyle={{padding: 10, flex: 1}}
            onPress={() =>
              this.props.navigation.navigate('_Vendor', {show: false})
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

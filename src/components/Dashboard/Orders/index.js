import React, {Component} from 'react';
import {SafeAreaView, Text, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Button} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';
var {height} = Dimensions.get('window');

export class Orders extends Component {
  render() {
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
              text: 'Your Recent Orders',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
          />
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 3}}>
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
          <Button
            title="See Vendor"
            buttonStyle={{backgroundColor: '#C50069'}}
            containerStyle={{padding: 10, flex: 1}}
            onPress={() => this.props.navigation.navigate('Vendor')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

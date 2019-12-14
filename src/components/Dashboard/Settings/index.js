import React, {Component} from 'react';
import {SafeAreaView, Text, Dimensions, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Header, Input, Button, Icon} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';

var {height} = Dimensions.get('window');
let subheight = height / 10;

export class Settings extends Component {
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
              text: 'Settings',
              style: {color: '#fff'},
            }}
          />
          <View style={styles.listitem}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Load Images</Text>
              <Icon name="sync" />
            </View>
          </View>
          <View style={styles.listitem}>
            <Text>Your Location</Text>
            <Text style={styles.listitemtext}>Uganda</Text>
          </View>
          <View style={styles.listitem}>
            <Text>Push Notifications</Text>
            <Text style={styles.listitemtext}>Change Setting</Text>
          </View>
          <View style={styles.listitem}>
            <Text>Copyright c 2019 Bake4Me V 1.1</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    padding: 10,
    height: subheight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C50069',
    justifyContent: 'space-around',
  },
  listitemlabel: {
    fontWeight: 'bold',
  },
  listitemtext: {
    color: '#C50069',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

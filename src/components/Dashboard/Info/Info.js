import React, {Component} from 'react';
import {SafeAreaView, Text, Dimensions, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Header, ListItem, Icon} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';

import * as screenNames from '_constants/screen_names';

var {height} = Dimensions.get('window');

const infoitems = [
  {Title: 'How it works?', Screen: screenNames.WORKS},
  {Title: 'Press', Screen: screenNames.PRESS},
  {Title: 'Contact', Screen: screenNames.CONTACT},
  {Title: 'Terms and Conditions', Screen: screenNames.TERMS},
  {Title: 'Privacy Policy', Screen: screenNames.POLICY},
];

export class Info extends Component {
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
              text: 'Info',
              style: {color: '#fff'},
            }}
          />
          <View>
            {infoitems.map((infoitem, i) => (
              <ListItem
                key={i}
                title={infoitem.Title}
                bottomDivider
                onPress={() => this.props.navigation.navigate(infoitem.Screen)}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Info);

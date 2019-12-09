import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

const Drawer = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Drawer;

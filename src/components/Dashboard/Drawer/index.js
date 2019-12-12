import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

const Drawer = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View
        style={{
          height: '30%',
          backgroundColor: '#C50069',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 10,
        }}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>
          Login in to your account
        </Text>
      </View>
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

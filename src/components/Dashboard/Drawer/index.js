import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, View, Text, Dimensions} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

var {height} = Dimensions.get('window');

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
    height,
  },
});

export default Drawer;

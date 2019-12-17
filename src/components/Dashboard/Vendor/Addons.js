import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';

const height = Dimensions.get('window').height;

export class Addons extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.scene, {backgroundColor: '#FFF'}]}>
          <Text> Addons </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    height: height * 0.75,
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Addons);

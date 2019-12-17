import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';

const height = Dimensions.get('window').height;

export class Snacks extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.scene, {backgroundColor: '#FFF'}]}>
          <Text> Snacks </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);

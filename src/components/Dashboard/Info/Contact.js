import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon} from 'react-native-elements';

export class Contact extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Header
            Header
            backgroundColor="#C50069"
            leftComponent={
              <Icon
                name="arrow-back"
                size={24}
                color="#fff"
                onPress={() => this.props.navigation.navigate('_Info')}
              />
            }
            centerComponent={{
              text: 'Contact',
              style: {color: '#fff'},
            }}
          />
          <Text> Contact </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

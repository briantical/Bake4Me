import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon} from 'react-native-elements';

export class Works extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Header
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
              text: 'How it Works',
              style: {color: '#fff'},
            }}
          />
          <Text> How it works </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Works);

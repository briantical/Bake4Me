import React, {Component} from 'react';
import {SafeAreaView, Dimensions, View} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';
var {height} = Dimensions.get('window');

export class Live_Chat extends Component {
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
              text: 'Live Chat',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Live_Chat);

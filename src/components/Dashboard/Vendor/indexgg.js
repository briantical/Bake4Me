import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Tile} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';
import TabViewExample from '.';

export class Vendor extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
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
              text: 'Delivery to Nakasero',
              style: {color: '#fff'},
            }}
          />
          <Tile
            imageSrc={require('_assets/bake4me.png')}
            title="Bake4Me"
            featured
            caption="Get all the cafectionery"
            containerStyle={{margin: 10}}
            imageContainerStyle={{padding: 10}}
            titleStyle={{color: 'rgb(42,203,178)'}}
            captionStyle={{fontWeight: 'bold'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Caption</Text>
              <Text>Caption</Text>
            </View>
          </Tile>
          <TabViewExample />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);

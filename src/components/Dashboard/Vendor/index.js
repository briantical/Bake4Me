import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Tile} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {setScrollScreen, setScrollScreenIndex} from '_actions';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#FFF'}]}>
    <Text>ONE</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#FFF'}]}>
    <Text>SECOND</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#FFF'}]}>
    <Text>THIRD</Text>
  </View>
);

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const initialLayout = {width};

const renderScene = SceneMap({
  cakes: FirstRoute,
  snacks: SecondRoute,
  addons: ThirdRoute,
});

export class Vendor extends Component {
  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#C50069'}}
      style={{backgroundColor: '#FFF', height: 50, width}}
      scrollEnabled={true}
      activeColor="#C50069"
      inactiveColor="#000"
      bounces
    />
  );

  render() {
    let {screens, screensindex, setScrollScreenIndex} = this.props;
    let index = screensindex;
    let routes = screens;

    return (
      <SafeAreaView style={{flex: 1}}>
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
        <ScrollView>
          <Tile
            imageSrc={require('_assets/bake4me.png')}
            title="Bake4Me"
            featured
            caption="Get all the cafectionery"
            containerStyle={{}}
            imageContainerStyle={{}}
            imageProps={{resizeMode: 'contain'}}
            titleStyle={{color: 'rgb(42,203,178)'}}
            captionStyle={{fontWeight: 'bold'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>World wide </Text>
              <Text>Caption Caption</Text>
            </View>
          </Tile>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={this.renderTabBar}
            onIndexChange={setScrollScreenIndex}
            initialLayout={initialLayout}
          />
        </ScrollView>
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

const mapStateToProps = state => {
  const {screens, screensindex} = state;
  return {screens, screensindex};
};

const mapDispatchToProps = {setScrollScreen, setScrollScreenIndex};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);

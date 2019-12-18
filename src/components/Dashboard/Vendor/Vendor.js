import React, {Component} from 'react';
import {SafeAreaView, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Tile} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {setScrollScreen, setScrollScreenIndex} from '_actions';

import {Cakes, Snacks, Addons} from '_components';

import * as screenNames from '_constants/screen_names';

const FirstRoute = () => <Cakes />;
const SecondRoute = () => <Snacks />;
const ThirdRoute = () => <Addons />;

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
            style: {color: '#fff', fontWeight: 'bold'},
          }}
          rightComponent={
            <Icon
              name="info"
              type="feather"
              color="#FFF"
              onPress={() => this.props.navigation.navigate(screenNames.ABOUT)}
            />
          }
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
            captionStyle={{fontWeight: 'bold'}}></Tile>

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

const mapStateToProps = state => {
  const {screens, screensindex} = state;
  return {screens, screensindex};
};

const mapDispatchToProps = {setScrollScreen, setScrollScreenIndex};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);

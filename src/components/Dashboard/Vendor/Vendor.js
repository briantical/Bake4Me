import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Tile} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {setScrollScreen, setScrollScreenIndex} from '_actions';

import {Cakes, Snacks, Addons} from '_components';

import * as screenNames from '_constants/screen_names';

const height = Dimensions.get('window').height;

const FirstRoute = () => <Cakes />;
const SecondRoute = () => <Snacks />;
const ThirdRoute = () => <Addons />;

const width = Dimensions.get('window').width;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  cakes: FirstRoute,
  snacks: SecondRoute,
  addons: ThirdRoute,
});

const DATA = [
  {
    id: 'first',
    title: 'First flatlist',
  },
];

const data = [{id: 'second', title: 'Second flatlist'}];

const Item2 = ({props}) => {
  let {screens, screensindex, setScrollScreenIndex} = props;
  let index = screensindex;
  let routes = screens;

  let renderTabBar = props => (
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
  return (
    <>
      <Tile
        imageSrc={require('_assets/bake4me.png')}
        title="Bake4Me"
        featured
        caption="Get all the cafectionery"
        imageProps={{resizeMode: 'contain'}}
        titleStyle={{color: 'rgb(42,203,178)'}}
        captionStyle={{fontWeight: 'bold'}}></Tile>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setScrollScreenIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};

const Item = ({props}) => {
  return (
    <View style={styles.item}>
      <FlatList
        data={data}
        renderItem={() => <Item2 props={props} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export class Vendor extends Component {
  render() {
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
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item props={this.props} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    height: height * 0.75,
  },
  item: {
    flex: 1,
    position: 'relative',
  },
});

const mapStateToProps = state => {
  const {screens, screensindex} = state;
  return {screens, screensindex};
};

const mapDispatchToProps = {setScrollScreen, setScrollScreenIndex};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);

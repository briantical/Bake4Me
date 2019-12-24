import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Tile, Button} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {setScrollScreen} from '_actions';

import {Cakes, Snacks, Addons} from '_components';
import * as screenNames from '_constants/screen_names';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const initialLayout = {width};

const first_data = [
  {
    id: 'first',
    title: 'First Componet',
  },
];

const second_data = [
  {
    id: 'second',
    title: 'Second Component',
  },
];

const TabsComponent = ({componentProps}) => {
  let {screens, setScrollScreen} = componentProps;
  let index = screens;
  let routes = [
    {key: 'cakes', title: 'Cakes'},
    {key: 'snacks', title: 'Snacks'},
    {key: 'addons', title: 'Addons'},
  ];

  const CakesScreen = () => <Cakes componentProps={componentProps} />;
  const SnacksScreen = () => <Snacks componentProps={componentProps} />;
  const AddonsScreens = () => <Addons componentProps={componentProps} />;

  const renderScene = SceneMap({
    cakes: CakesScreen,
    snacks: SnacksScreen,
    addons: AddonsScreens,
  });

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
        onIndexChange={setScrollScreen}
        initialLayout={initialLayout}
      />
    </>
  );
};

const VendorComponent = ({componentProps}) => {
  return (
    <View style={styles.item}>
      <FlatList
        data={second_data}
        renderItem={() => <TabsComponent componentProps={componentProps} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export class Vendor extends Component {
  render() {
    let {
      cart,
      navigation: {
        state: {
          params: {show},
        },
      },
    } = this.props;

    let count = cart.length;

    // let price = cart.map((item) =>{

    //   item.price
    // })
    let totalprice = cart.reduce(function(prev, cur) {
      return prev + cur.count * cur.price;
    }, 0);

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
          data={first_data}
          renderItem={({props}) => (
            <VendorComponent componentProps={this.props} />
          )}
          keyExtractor={item => item.id}
        />
        {show ? (
          <Button
            buttonStyle={{backgroundColor: '#C50069'}}
            containerStyle={{padding: 10}}
            title={count + ' Item  VIEW ORDER ' + totalprice + ' Ush'}
          />
        ) : null}
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
  const {screens, cart} = state;
  return {screens, cart};
};

const mapDispatchToProps = {setScrollScreen};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);

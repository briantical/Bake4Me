import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Header, Icon, Tile, Button} from 'react-native-elements';
import {DrawerActions} from 'react-navigation-drawer';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {setScrollScreen} from '_actions';

import {Products} from '_components';
import * as screenNames from '_constants/screen_names';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const initialLayout = {width};

const first_data = [
  {
    id: 'first',
    title: 'First Component',
  },
];

const second_data = [
  {
    id: 'second',
    title: 'Second Component',
  },
];

const cakes_data = [
  {
    id: 'bd7acbdea-4-cake-aepd5-3ad53abb28ba',
    name: 'Cake 1',
    description: 'The cake one',
    image: require('_assets/cake1.jpg'),
    price: '30000',
    count: 0,
  },
  {
    id: 'bd7acbefa-4-cake-aaed5-3ad5x3abb28ba',
    name: 'Cake 2',
    description: 'The cake two',
    image: require('_assets/cake2.jpg'),
    price: '33000',
    count: 0,
  },
  {
    id: 'bd7acbea-4-446c2-cake-3ads53sabb28ba',
    name: 'Cake 3',
    description: 'The cake three',
    image: require('_assets/cake3.jpg'),
    price: '45000',
    count: 0,
  },
  {
    id: 'bd7acbea-4-49846c2-cake-3ads53sabb28ba',
    name: 'Cake 4',
    description: 'The cake four',
    image: require('_assets/cake1.jpg'),
    price: '25000',
    count: 0,
  },
];

const snacks_data = [
  {
    id: 'bd7acbdea-4-snack-aepd5-3ad53abb28ba',
    name: 'Snack 1',
    description: 'The snack one',
    image: require('_assets/snack1.jpg'),
    price: '30000',
    count: 0,
  },
  {
    id: 'bd7acbefa-4-snack-aaed5-3ad5x3abb28ba',
    name: 'Snack 2',
    description: 'The snack two',
    image: require('_assets/snack2.jpg'),
    price: '33000',
    itemcount: 0,
  },
  {
    id: 'bd7acbea-4-446c2-snack-3ads53sabb28ba',
    name: 'Snack 3',
    description: 'The snack three',
    image: require('_assets/snack3.jpg'),
    price: '45000',
    count: 0,
  },
];

const addons_data = [
  {
    id: 'bd7acbdea-4-addon-aepd5-3ad53abb28ba',
    name: 'Addon 1',
    description: 'The addon one',
    image: require('_assets/addon1.jpg'),
    price: '30000',
    count: 0,
  },
  {
    id: 'bd7acbefa-4-addon-aaed5-3ad5x3abb28ba',
    name: 'Addon 2',
    description: 'The addon two',
    image: require('_assets/addon2.jpg'),
    price: '33000',
    count: 0,
  },
  {
    id: 'bd7acbea-4-446c2-addon-3ads53sabb28ba',
    name: 'Addon 3',
    description: 'The addon three',
    image: require('_assets/addon3.jpg'),
    price: '45000',
    count: 0,
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

  const cakes = () => (
    <Products componentProps={componentProps} data={cakes_data} />
  );
  const snacks = () => (
    <Products componentProps={componentProps} data={snacks_data} />
  );
  const addons = () => (
    <Products componentProps={componentProps} data={addons_data} />
  );

  const renderScene = SceneMap({
    cakes,
    snacks,
    addons,
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
        containerStyle={{
          backgroundColor: 'transparent',
        }}
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
          params: {show = false, area = '...'},
        },
      },
    } = this.props;

    let count = cart.length;

    let totalprice = cart.reduce(function(prev, cur) {
      return prev + cur.count * cur.price;
    }, 0);

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          backgroundColor="#C50069"
          leftComponent={
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="menu"
                color="#fff"
                onPress={() =>
                  this.props.navigation.dispatch(DrawerActions.openDrawer())
                }
              />
              <TouchableOpacity
                style={{marginLeft: 20}}
                onPress={() => this.props.navigation.navigate('_Delivery')}>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 12}}>
                  Delivery to
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginRight: 10,
                    }}>
                    {area}
                  </Text>
                  <Icon name="down" type="antdesign" color="#FFF" size={13} />
                </View>
              </TouchableOpacity>
            </View>
          }
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
            containerStyle={{margin: 10, backgroundColor: 'transparent'}}
            title={count + ' Item  VIEW ORDER ' + totalprice + ' Ush'}
            onPress={() => this.props.navigation.navigate('OrderDetails')}
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

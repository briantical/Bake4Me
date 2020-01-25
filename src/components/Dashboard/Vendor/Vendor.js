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
import axios from 'axios';
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

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMGRlZGNmMTQ3OGRiMDQxMTQ1MDlmMCIsImlhdCI6MTU3ODEzMTY2OCwiZXhwIjoxNTgwNzIzNjY4fQ.s8Fr5gaUtmOFs-sfNUAO4bCIY8UdWVHi2PmTS_XdurA';

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
    id: 'cbd7acbpdea-4-cake-aepd5-3ad53abb28ba',
    name: 'Red Velvet',
    description:
      'Red velvet cake with cream cheese frosting! fluffy, soft, buttery and moist with the most perfect velvet texture.',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FRed%20Velvet%20Cake.jpeg?alt=media&token=d604cdb6-bd9d-402a-8e5b-3d27adfccaf9',
    ],
    price: '30000',
    count: 0,
    required: {
      shapes: ['Round', 'Rectangle'],
      tiers: [2, 4, 5],
      flavours: ['Stawberry', 'Vanilla'],
      colours: ['Blue', 'White'],
      weight: [1.5, 2, 4],
    },
    options: {
      drinks: [
        {
          name: 'Coke 2Ltr',
          cost: 7000,
        },
        {
          name: 'Sprite 2Ltr',
          cost: 7000,
        },
      ],
    },
  },
];
const snacks_data = [
  {
    id: 'sbd7acbpdea-4-cake-aepd5-3ad53abb28ba',
    name: 'Danish Cookies',
    description:
      'Danish Cookies are unleavened cookies consisting of butter, flour, and sugar',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fsnacks%2Fcookies.jpeg?alt=media&token=aa62363e-fb05-406c-abf7-c53e1f4eab68',
    ],
    price: '5500',
    count: 0,
    required: {
      shapes: ['Round', 'Rectangle', 'Starred'],
      tiers: [0],
      flavours: ['Stawberry', 'Vanilla'],
      colours: ['Brown', 'Red'],
      weight: [1.5, 2, 3],
    },
    options: {
      drinks: [
        {
          name: 'Coke 2Ltr',
          cost: 7000,
        },
        {
          name: 'Sprite 2Ltr',
          cost: 7000,
        },
      ],
    },
  },
];

const addons_data = [
  {
    id: 'abd7acbpdea-4-cake-aepd5-3ad53abb28ba',
    name: 'Red Velvet',
    description:
      'Red velvet cake with cream cheese frosting! fluffy, soft, buttery and moist with the most perfect velvet texture.',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FRed%20Velvet%20Cake.jpeg?alt=media&token=d604cdb6-bd9d-402a-8e5b-3d27adfccaf9',
    ],
    price: '30000',
    count: 0,
    required: {
      shapes: ['Round', 'Rectangle'],
      tiers: [2, 4, 5],
      flavours: ['Stawberry', 'Vanilla'],
      colours: ['Blue', 'White'],
      weight: [1.5, 2, 4],
    },
    options: {
      drinks: [
        {
          name: 'Coke 2Ltr',
          cost: 7000,
        },
        {
          name: 'Sprite 2Ltr',
          cost: 7000,
        },
      ],
    },
  },
];

const getCakes = () => {
  let headers = {
    Authorization: 'Bearer ' + token,
  };
  axios
    .get(`http://localhost:3000/api/v1/cake/`, {headers})
    .then(response => {
      const {cakes} = response.data;
      //console.log(cakes);
      return cakes;
    })
    .catch(error => {
      //console.log(error);
      return error;
    });
};

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
      user: {
        profile: {location},
      },
      cart,
      navigation: {
        state: {
          params: {show = false, area = location},
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
                <Text
                  style={{
                    color: '#FFF',
                    fontWeight: 'bold',
                    fontSize: 12,
                    width: 100,
                  }}>
                  Delivery to
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginRight: 10,
                    }}>
                    {area}
                  </Text>
                  <Icon
                    name="down"
                    type="antdesign"
                    color="#FFF"
                    size={13}
                    iconStyle={{fontWeight: 'bold'}}
                  />
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
        <Button
          buttonStyle={{
            borderColor: '#C50069',
            backgroundColor: '#C50069',
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
          type="outline"
          raised={true}
          containerStyle={{
            position: 'absolute',
            zIndex: 2,
            bottom: 50,
            right: 50,
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
          title={'+'}
          titleStyle={{color: '#FFF', fontWeight: 'bold'}}
          onPress={() => this.props.navigation.navigate('Custom')}
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
  item: {
    flex: 1,
    position: 'relative',
    zIndex: 0,
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = state => {
  const {screens, cart, token, user} = state;
  return {screens, cart, token, user};
};

const mapDispatchToProps = {setScrollScreen};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);

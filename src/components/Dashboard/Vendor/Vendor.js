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
    id: 'bd7acbpdea-4-cake-aepd5-3ad53abb28ba',
    name: 'Red Velvet',
    description:
      'Red velvet cake with cream cheese frosting! fluffy, soft, buttery and moist with the most perfect velvet texture.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FRed%20Velvet%20Cake.jpeg?alt=media&token=d604cdb6-bd9d-402a-8e5b-3d27adfccaf9',
    price: '30000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acbdea-4-cake-aepd5-3ad53abb28ba',
    name: 'Black Forest',
    description:
      'The Black Forest with homemade whipped cream, rich chocolate ganache, and sweet spiked cherries.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FBlack%20Forest%20Cake.png?alt=media&token=214d6ff1-53e2-4566-812e-8074d901556e',
    price: '30000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acbefa-4-cake-aaed5-3ad5x3abb28ba',
    name: 'White Forest',
    description:
      'The white Forest is made of vanilla cake layers that are brushed with syrup and filled with homemade cherry jam and vanilla cream. ',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FWhite%20Forest%20Cake.jpeg?alt=media&token=dcee4c27-0af8-4876-95e8-794c90cede40',
    price: '33000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Banana',
        cost: 0,
      },
      {
        marked: false,
        name: 'Coconut',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 1Ltr',
        cost: 3500,
      },
      {
        marked: false,
        name: 'Fanta 1Ltr',
        cost: 3500,
      },
      {
        marked: false,
        name: 'Sprite 1Ltr',
        cost: 3500,
      },
      {
        marked: false,
        name: 'Stoney 1Ltr',
        cost: 3500,
      },
    ],
  },
  {
    id: 'bd7acbea-4-446c2-cake-3ads53sabb28ba',
    name: 'Chocolate Fudge',
    description:
      'The Chocolate Fudge made with both melted chocolate and cocoa, and topped with chocolate ganache.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FChocolate%20Fudge.png?alt=media&token=e078137a-c079-42f4-ab16-449ba1df55a1',
    price: '45000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Carrot',
        cost: 0,
      },
      {
        marked: false,
        name: 'Burberry',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Minute Maid 500ml',
        cost: 2000,
      },
      {
        marked: false,
        name: 'Fanta 500ml',
        cost: 2000,
      },
      {
        marked: false,
        name: 'Sprite 500ml',
        cost: 2000,
      },
      {
        marked: false,
        name: 'Stoney 500ml',
        cost: 2000,
      },
    ],
  },
  {
    id: 'bd7apcbea-4-49846c2-cake-3ads53sabb28ba',
    name: 'Creamy Carrot',
    description: 'Creamy carrot cake with luscious cream cheese frosting!',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FCarrot%20cake.jpeg?alt=media&token=8ad783b3-ec94-4dfc-a02e-1fea5b6a18fe',
    price: '25000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Coconut',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Minute Maid 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'b1d7acb0ea-4-49846c2-cake-3ads53sabb28ba',
    name: 'Marble Cake',
    description:
      'Soft, fluffy, moist Marble cake, made with vanilla and chocolate cake swirled together.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FMarble%20Cake.png?alt=media&token=28a16134-c1d6-4bfa-8904-8e7153aaf5a8',
    price: '25000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Coconut',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Minute Maid 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7aqwcbea-4-49846c2-cake-3ads53sabb28ba',
    name: 'Lemon Cake',
    description:
      'A zingy Lemon Cake with mascarpone filling inside and a dreamy Swiss meringue buttercream outside',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FLemon%20Cake.jpeg?alt=media&token=e441f63a-6134-4c9e-b268-7d6fcb00b2d8',
    price: '25000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Coconut',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Minute Maid 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7aacbea-4-49846c2-cake-3ads53sabb28ba',
    name: 'Banana Cake',
    description:
      'Banana cake is a cake prepared using banana as a primary ingredient and typical cake ingredients.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FBanana%20Cake.jpeg?alt=media&token=381c3889-d529-4bcd-b4c0-5928c05bdf5c',
    price: '25000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Coconut',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Minute Maid 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acoebea-4-490846c2-cake-3ads53sabb28ba',
    name: 'Apple Pie Cake',
    description:
      'A cross between pie and a fruit crisp, this dramatic dessert is made with just six common ingredients',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FApple%20Pie%20Cake.jpeg?alt=media&token=26620306-5cb1-4985-9c6d-24a9baa6b4b9',
    price: '25000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Coconut',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Minute Maid 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acjdbea-4-49846c2-cake-3ads53sabb28ba',
    name: 'Brownie Cake',
    description:
      'The decadent brownie cake loaded with semi-sweet chocolate and rich cocoa powder is for you',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fcakes%2FBrownie%20Cake.png?alt=media&token=bd2b969a-731a-4b8d-a70c-e6f45b2f09b4',
    price: '25000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Coconut',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Minute Maid 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
];

const snacks_data = [
  {
    id: 'bd7acbdea-4-snack-aepd5-3ad53abb28ba',
    name: 'Snack 1',
    description: 'The snack one',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fsnacks%2Fcookies.jpeg?alt=media&token=aa62363e-fb05-406c-abf7-c53e1f4eab68',
    price: '30000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acbefa-4-snack-aaed5-3ad5x3abb28ba',
    name: 'Snack 2',
    description: 'The snack two',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fsnacks%2Fcookies.jpeg?alt=media&token=aa62363e-fb05-406c-abf7-c53e1f4eab68',
    price: '33000',
    itemcount: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acbea-4-446c2-snack-3ads53sabb28ba',
    name: 'Snack 3',
    description: 'The snack three',
    image:
      'https://firebasestorage.googleapis.com/v0/b/bake4me-confectioneries.appspot.com/o/assets%2Fsnacks%2Fcookies.jpeg?alt=media&token=aa62363e-fb05-406c-abf7-c53e1f4eab68',
    price: '45000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
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
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acbefa-4-addon-aaed5-3ad5x3abb28ba',
    name: 'Addon 2',
    description: 'The addon two',
    image: require('_assets/addon2.jpg'),
    price: '33000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
  },
  {
    id: 'bd7acbea-4-446c2-addon-3ads53sabb28ba',
    name: 'Addon 3',
    description: 'The addon three',
    image: require('_assets/addon3.jpg'),
    price: '45000',
    count: 0,
    required: [
      {
        marked: false,
        name: 'Strawberry',
        cost: 0,
      },
      {
        marked: false,
        name: 'Vanilla',
        cost: 0,
      },
    ],
    options: [
      {
        marked: false,
        name: 'Coke 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Fanta 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Sprite 2Ltr',
        cost: 7000,
      },
      {
        marked: false,
        name: 'Stoney 2Ltr',
        cost: 7000,
      },
    ],
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

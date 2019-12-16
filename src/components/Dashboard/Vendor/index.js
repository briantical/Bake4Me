import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Header, Icon, Tile} from 'react-native-elements';

import {DrawerActions} from 'react-navigation-drawer';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function Vendor() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
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
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

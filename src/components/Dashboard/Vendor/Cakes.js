import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

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

const CakesComponent = ({content, componentProps}) => {
  let {id, name, description, image, price, count} = content;
  let {cart} = componentProps;
  let exists = cart.some(item => item.id == id);

  return (
    <TouchableOpacity
      onPress={() =>
        componentProps.navigation.navigate('Cart', {content, exists})
      }
      style={{
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: 'black',
          height: 80,
          width: 80,
          marginLeft: 10,
        }}>
        <Image source={(require = image)} style={{height: 80, width: 80}} />
      </View>
      <View style={{paddingLeft: 5}}>
        <Text style={{fontWeight: 'bold'}}>{name}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export class Cakes extends Component {
  render() {
    const {componentProps} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cakes_data}
          renderItem={({item}) => (
            <CakesComponent content={item} componentProps={componentProps} />
          )}
          listKey={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  let {cart} = state;
  return {cart};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);

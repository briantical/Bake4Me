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

const snacks_data = [
  {
    id: 'bd7acbdea-4-snack-aepd5-3ad53abb28ba',
    name: 'Snack 1',
    description: 'The snack one',
    image: require('_assets/snack1.jpg'),
    price: '30000',
  },
  {
    id: 'bd7acbefa-4-snack-aaed5-3ad5x3abb28ba',
    name: 'Snack 2',
    description: 'The snack two',
    image: require('_assets/snack2.jpg'),
    price: '33000',
  },
  {
    id: 'bd7acbea-4-446c2-snack-3ads53sabb28ba',
    name: 'Snack 3',
    description: 'The snack three',
    image: require('_assets/snack3.jpg'),
    price: '45000',
  },
];

const SnacksComponent = ({content, componentProps}) => {
  let {id, name, description, image, price} = content;
  return (
    <TouchableOpacity
      onPress={() => componentProps.navigation.navigate('Cart', {content})}
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

export class Snacks extends Component {
  render() {
    const {componentProps} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={snacks_data}
          renderItem={({item}) => (
            <SnacksComponent content={item} componentProps={componentProps} />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);

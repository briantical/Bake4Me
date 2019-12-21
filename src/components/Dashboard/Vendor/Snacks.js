import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import {connect} from 'react-redux';

const DATA = [
  {
    id: 'bd7acbdea-4-Snack-aled5-3ad53abb28ba',
    name: 'Snack 1',
    description: 'The Snack one',
    image: 'Snack one image url',
    price: '30000',
  },
  {
    id: 'bd7acbefa-4-Snack-ajed;5-3ad5x3abb28ba',
    name: 'Snack 2',
    description: 'The Snack two',
    image: 'Snack two image url',
    price: '33000',
  },
  {
    id: 'bd7acbea-4-44j6c2-Snack-3ad53sabb28ba',
    name: 'Snack 3',
    description: 'The Snack three',
    image: 'Snack three image url',
    price: '45000',
  },
];

const Item = ({content}) => {
  let {id, name, description, image, price} = content;
  return (
    <View
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
        <Text>{image}</Text>
      </View>
      <View style={{paddingLeft: 5}}>
        <Text style={{fontWeight: 'bold'}}>{name}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export class Snacks extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item content={item} />}
          listKey={(item, index) => 'D' + index.toString()}
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

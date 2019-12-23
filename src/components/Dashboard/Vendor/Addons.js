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

const addons_data = [
  {
    id: 'bd7acbdea-4-addon-aepd5-3ad53abb28ba',
    name: 'Addon 1',
    description: 'The addon one',
    image: require('_assets/addon1.jpg'),
    price: '30000',
  },
  {
    id: 'bd7acbefa-4-addon-aaed5-3ad5x3abb28ba',
    name: 'Addon 2',
    description: 'The addon two',
    image: require('_assets/addon2.jpg'),
    price: '33000',
  },
  {
    id: 'bd7acbea-4-446c2-addon-3ads53sabb28ba',
    name: 'Addon 3',
    description: 'The addon three',
    image: require('_assets/addon3.jpg'),
    price: '45000',
  },
];

const AddonsComponent = ({content, componentProps}) => {
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

export class Addons extends Component {
  render() {
    const {componentProps} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={addons_data}
          renderItem={({item}) => (
            <AddonsComponent content={item} componentProps={componentProps} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Addons);

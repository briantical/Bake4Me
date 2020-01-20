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
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

const ProductsComponent = ({content, componentProps}) => {
  let {id, name, description, images, price} = content;
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
      <SkeletonContent
        isLoading={false}
        containerStyle={{flexDirection: 'row'}}>
        <View
          style={{
            height: 80,
            width: 80,
            marginLeft: 10,
          }}>
          <Image
            source={
              typeof images[0] == 'string'
                ? {uri: images[0]}
                : require('_assets/default_cake.png')
            }
            style={{height: 80, width: 80}}
          />
        </View>
        <View style={{paddingLeft: 5, width: 300, height: 20}}>
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
          <Text>{description}</Text>
          <Text>{price}</Text>
        </View>
      </SkeletonContent>
    </TouchableOpacity>
  );
};

export class Products extends Component {
  render() {
    const {componentProps, data} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ProductsComponent content={item} componentProps={componentProps} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);

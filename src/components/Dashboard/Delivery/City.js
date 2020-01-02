import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Header, Input, Icon, ListItem} from 'react-native-elements';

let {height} = Dimensions.get('window');

let addresses = [
  {
    city: 'Kampala',
    areas: ['Bakuli', 'Wandegeya', 'Kamwokya', 'Ntinda', 'Bugolobi'],
  },
  {
    city: 'Entebbe',
    areas: ['Kitoro', 'Zzana', 'Abaita', 'Namasuba'],
  },
];

export class City extends Component {
  render() {
    return (
      <View>
        <View style={{height}}>
          <Header
            backgroundColor="#C50069"
            leftComponent={
              <Icon
                name="arrow-back"
                size={24}
                color="#fff"
                onPress={() => this.props.navigation.navigate('_Delivery')}
              />
            }
            centerComponent={{
              text: 'City',
              style: {color: '#fff'},
            }}
          />
          <Input
            placeholder="What city are you in?"
            leftIcon={<Icon name="search" size={24} color="#C50069" />}
          />

          <View>
            {addresses.map((address, i) => (
              <ListItem
                key={i}
                title={address.city}
                bottomDivider
                chevron
                onPress={() =>
                  this.props.navigation.navigate('Area', {
                    areas: address.areas,
                    city: address.city,
                  })
                }
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(City);

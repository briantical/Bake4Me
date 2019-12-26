import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';

var {height} = Dimensions.get('window');

import {Header, Input, Icon, ListItem} from 'react-native-elements';

const cities = ['Kampala', 'Entebbe'];

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
            {cities.map((city, i) => (
              <ListItem
                key={i}
                title={city}
                bottomDivider
                chevron
                onPress={() => this.props.navigation.navigate('Area')}
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

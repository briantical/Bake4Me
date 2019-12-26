import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';

var {height} = Dimensions.get('window');

import {Header, Input, Icon, ListItem} from 'react-native-elements';

const areas = ['Bakuli', 'Wandegeya', 'Kamwokya', 'Ntinda'];

export class Area extends Component {
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
                onPress={() => this.props.navigation.navigate('City')}
              />
            }
            centerComponent={{
              text: 'Area',
              style: {color: '#fff'},
            }}
          />
          <Input
            placeholder="What area of Kampala are you in?"
            leftIcon={<Icon name="search" size={24} color="#C50069" />}
          />

          <View>
            {areas.map((area, index) => (
              <ListItem
                key={index}
                title={area}
                bottomDivider
                onPress={() =>
                  this.props.navigation.navigate('_Vendor', {show: false, area})
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

export default connect(mapStateToProps, mapDispatchToProps)(Area);

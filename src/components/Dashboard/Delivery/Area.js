import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Header, Input, Icon, ListItem} from 'react-native-elements';

let {height} = Dimensions.get('window');

export class Area extends Component {
  render() {
    let {
      navigation: {
        state: {
          params: {areas = [], city = ''},
        },
      },
    } = this.props;

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
            placeholder={
              areas.length != 0
                ? 'What area of ' + city + ' are you in?'
                : 'First choose a city'
            }
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

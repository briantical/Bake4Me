import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {Header, Icon, CheckBox, Input, Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

import {setCount, increaseCount, decreaseCount} from '_actions';

const shapes = ['Round', 'Rectangle', 'Other'];
const icings = ['Butter', 'Fondant', 'Other'];
const flavours = [
  'Vanilla',
  'Strawberry',
  'Coconut',
  'Lemon',
  'Chocolate',
  'Red Velvet',
];

const exists = false;

export class Custom extends Component {
  componentDidMount() {
    this.props.setCount(1);
  }

  chooseImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log(images);
    });
  };
  render() {
    let {count, increaseCount, decreaseCount} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <View style={{flex: 1}}>
            <Formik
              initialValues={{
                shapes: {shape: 'round', selected: true},
                icings: {icing: 'butter', selected: true},
                tiers: 0,
                flavours: {flavour: 'Vanilla', selected: true},
                colours: 'Pink',
                instructions: 'How would you like your cake?',
                count: 0,
              }}
              onSubmit={values => this.createCart(values)}
              validate={values => validate(values)}>
              {({handleChange, handleSubmit, values, errors}) => (
                <View style={{marginTop: 20, justifyContent: 'flex-end'}}>
                  <Header
                    backgroundColor="#C50069"
                    leftComponent={
                      <Icon
                        name="arrow-back"
                        color="#fff"
                        onPress={() => {
                          this.props.navigation.goBack();
                        }}
                      />
                    }
                    centerComponent={{
                      text: 'Make custom order',
                      style: {color: '#fff', fontWeight: 'bold'},
                    }}
                  />
                  <ScrollView style={{padding: 10}}>
                    <View style={{marginTop: 10}}>
                      <Text style={{fontWeight: 'bold'}}>Shape :</Text>
                      {shapes.map((shape, index) => {
                        return (
                          <CheckBox
                            key={index}
                            checked={false}
                            checkedColor="#C50069"
                            title={shape}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                          />
                        );
                      })}
                      <Text>Describe other ...</Text>
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text style={{fontWeight: 'bold'}}>Icing :</Text>
                      {icings.map((icing, index) => {
                        return (
                          <CheckBox
                            key={index}
                            checked={false}
                            checkedColor="#C50069"
                            title={icing}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                          />
                        );
                      })}
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text style={{fontWeight: 'bold'}}>Tiers : </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: 200,
                          justifyContent: 'space-around',
                        }}>
                        <Text
                          style={{color: '#C50069', fontSize: 30}}
                          onPress={() => decreaseCount(count)}>
                          -
                        </Text>
                        <Text style={{fontSize: 25}}>{count}</Text>
                        <Text
                          style={{color: '#C50069', fontSize: 30}}
                          onPress={() => increaseCount(count)}>
                          +
                        </Text>
                      </View>
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text style={{fontWeight: 'bold'}}>Flavours : </Text>
                      {flavours.map((flavour, index) => {
                        return (
                          <CheckBox
                            key={index}
                            checked={false}
                            checkedColor="#C50069"
                            title={flavour}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                          />
                        );
                      })}
                    </View>

                    <View style={{marginTop: 10}}>
                      <Input
                        label="Colours"
                        autoCapitalize="words"
                        placeholder={values.colours}
                        onChangeText={handleChange('colours')}
                      />
                    </View>

                    <View style={{marginTop: 10}}>
                      <Input
                        label="Instructions"
                        autoCapitalize="sentences"
                        placeholder={values.instructions}
                        onChangeText={handleChange('instructions')}
                      />
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text onPress={() => this.chooseImage()}>
                        Upload sample image ...
                      </Text>
                    </View>

                    <View style={{marginTop: 10}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: 200,
                            justifyContent: 'space-around',
                          }}>
                          <Text
                            style={{color: '#C50069', fontSize: 30}}
                            onPress={() => decreaseCount(count)}>
                            -
                          </Text>
                          <Text style={{fontSize: 25}}>{count}</Text>
                          <Text
                            style={{color: '#C50069', fontSize: 30}}
                            onPress={() => increaseCount(count)}>
                            +
                          </Text>
                        </View>
                        <Button
                          title={exists ? 'UPDATE CART' : 'ADD TO CART'}
                          buttonStyle={{backgroundColor: '#C50069'}}
                          containerStyle={{padding: 10}}
                          onPress={() => this.setOrder()}
                        />
                      </View>
                    </View>
                  </ScrollView>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  let {count} = state;
  return {count};
};

const mapDispatchToProps = {setCount, increaseCount, decreaseCount};

export default connect(mapStateToProps, mapDispatchToProps)(Custom);

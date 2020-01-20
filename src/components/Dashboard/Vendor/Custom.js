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
import {firebase} from '@react-native-firebase/storage';

import {setCartItems} from '_actions';

const storageService = firebase.storage();
const storageRef = storageService.ref();

const shapes = ['Round', 'Rectangle', , 'Other'];
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
  constructor() {
    super();
    this.state = {
      count: 1,
      shapes: ['Round'],
      icings: ['Butter'],
      tiers: 1,
      weight: 1.5,
      images: [],
      flavours: ['Vanilla'],
      colours: 'Pink,Amber',
      description: 'How would you like your cake?',
    };
  }

  setOrder = values => {
    let {id, description, images, shapes, flavours, colours, weight} = values;

    let price = 0;
    let name = 'custom order';
    let options = null;
    let {
      state: {tiers, count},
      props: {setCartItems},
    } = this;

    setCartItems({
      count,
      id,
      name,
      description,
      images,
      price,
      required: {
        shapes,
        tiers: [tiers],
        flavours,
        colours: [colours],
        weight: [weight],
      },
      options: {
        drinks: [],
      },
    });

    this.props.navigation.navigate('_Vendor', {
      show: true,
    });
  };

  //Upload the image to firebase and return the URL to the image
  uploadImage = path => {
    const uploadTask = storageRef
      .child(`Orders/${Date.now() + '.png'}`)
      .put(path);

    uploadTask.on(
      'state_changed',
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
          default:
            console.log('Unknown state');
            break;
        }
      },
      error => {
        // Handle unsuccessful uploads
        console.log('error' + error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          //Get the uploaded image's url and set it as the image state
          this.setState({images: [...this.state.images, downloadURL]});
        });
      },
    );
    uploadTask
      .then(() => console.log('sucessfully uploaded the user image'))
      .catch(error => console.log('The error:' + error));
  };

  chooseImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      images.forEach(image => {
        let {path} = image;
        this.uploadImage(path);
      });
    });
  };
  render() {
    let {
      state,
      state: {count, tiers},
    } = this;

    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <View style={{flex: 1}}>
            <Formik
              initialValues={{
                ...state,
              }}
              onSubmit={values => this.setOrder(values)}>
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
                    <View
                      style={{
                        marginTop: 10,
                        // borderBottomColor: '#C50069',
                        //borderBottomWidth: StyleSheet.hairlineWidth,
                      }}>
                      <Text style={{fontWeight: 'bold'}}>Shape :</Text>
                      {shapes.map((shape, index) => {
                        return (
                          <CheckBox
                            key={index}
                            checked={shape == state.shapes[0]}
                            checkedColor="#C50069"
                            title={shape}
                            onPress={() => {
                              this.setState({
                                shapes: [shape],
                              });
                            }}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                          />
                        );
                      })}
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text style={{fontWeight: 'bold'}}>Icing :</Text>
                      {icings.map((icing, index) => {
                        return (
                          <CheckBox
                            key={index}
                            checked={icing == state.icings[0]}
                            checkedColor="#C50069"
                            title={icing}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                            onPress={() => {
                              this.setState({
                                icings: [icing],
                              });
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
                          onPress={() =>
                            tiers <= 1 ? null : this.setState({tiers: --tiers})
                          }>
                          -
                        </Text>
                        <Text style={{fontSize: 25}}>{tiers}</Text>
                        <Text
                          style={{color: '#C50069', fontSize: 30}}
                          onPress={() => this.setState({tiers: ++tiers})}>
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
                            checked={flavour == state.flavours[0]}
                            checkedColor="#C50069"
                            title={flavour}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                            onPress={() => {
                              this.setState({
                                flavours: [flavour],
                              });
                            }}
                          />
                        );
                      })}
                    </View>

                    <View style={{marginTop: 10}}>
                      <Input
                        label="Instructions"
                        autoCapitalize="sentences"
                        placeholder={values.description}
                        onChangeText={handleChange('description')}
                      />
                    </View>

                    <View style={{marginTop: 10}}>
                      <Input
                        label="Weight"
                        autoCapitalize="words"
                        keyboardType="numeric"
                        placeholder={`${values.weight.toString()} Kgs`}
                        onChangeText={handleChange('weight')}
                      />
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
                      <Button
                        type="outline"
                        title="UPLOAD IMAGE"
                        titleStyle={{color: '#C50069'}}
                        onPress={() => this.chooseImage()}
                        buttonStyle={{
                          borderColor: '#C50069',
                          borderWidth: 2,
                          borderRadius: 50,
                        }}
                      />
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
                            onPress={() =>
                              count <= 1
                                ? null
                                : this.setState({count: --count})
                            }>
                            -
                          </Text>
                          <Text style={{fontSize: 25}}>{count}</Text>
                          <Text
                            style={{color: '#C50069', fontSize: 30}}
                            onPress={() => this.setState({count: ++count})}>
                            +
                          </Text>
                        </View>
                        <Button
                          title={exists ? 'UPDATE CART' : 'ADD TO CART'}
                          buttonStyle={{backgroundColor: '#C50069'}}
                          containerStyle={{padding: 10}}
                          onPress={() => handleSubmit()}
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

const mapDispatchToProps = {
  setCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Custom);

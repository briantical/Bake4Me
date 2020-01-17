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
import firebase from 'react-native-firebase';

import {setCount, increaseCount, decreaseCount} from '_actions';

const storageService = firebase.storage();
const storageRef = storageService.ref();

const shapes = [
  {name: 'Round', selected: false},
  {name: 'Rectangle', selected: false},
  {name: 'Other', selected: false},
];
const icings = [
  {name: 'Butter', selected: false},
  {name: 'Fondant', selected: false},
  {name: 'Other', selected: false},
];
const flavours = [
  {name: 'Vanilla', selected: false},
  {name: 'Strawberry', selected: false},
  {name: 'Coconut', selected: false},
  {name: 'Lemon', selected: false},
  {name: 'Chocolate', selected: false},
  {name: 'Red Velvet', selected: false},
];

const exists = false;

export class Custom extends Component {
  constructor() {
    super();
    this.state = {
      shapes: {name: 'Round', selected: true},
      icings: {name: 'Butter', selected: true},
      tiers: 0,
      images: null,
      flavours: {name: 'Vanilla', selected: true},
      colours: 'Pink',
      instructions: 'How would you like your cake?',
    };
  }
  componentDidMount() {
    this.props.setCount(1);
  }

  // uploadImage = path => {
  //   storageRef.child(`Orders/${Date.now() + '.png'}`).put(path);
  // };

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
          this.setState({images: [...this.state.image, downloadURL]});
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
      console.log(images);
    });
  };
  render() {
    let {count, increaseCount, decreaseCount} = this.props;
    let {state} = this;

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
                            checked={shape.name == state.shapes.name}
                            checkedColor="#C50069"
                            title={shape.name}
                            onPress={() => {
                              this.setState({
                                shapes: {name: shape.name, selected: true},
                              });
                            }}
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
                            checked={icing.name == state.icings.name}
                            checkedColor="#C50069"
                            title={icing.name}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                            onPress={() => {
                              this.setState({
                                icings: {name: icing.name, selected: true},
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
                            this.state.tiers <= 0
                              ? null
                              : this.setState({tiers: --this.state.tiers})
                          }>
                          -
                        </Text>
                        <Text style={{fontSize: 25}}>{this.state.tiers}</Text>
                        <Text
                          style={{color: '#C50069', fontSize: 30}}
                          onPress={() =>
                            this.setState({tiers: ++this.state.tiers})
                          }>
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
                            checked={flavour.name == state.flavours.name}
                            checkedColor="#C50069"
                            title={flavour.name}
                            containerStyle={{
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }}
                            onPress={() => {
                              this.setState({
                                flavours: {name: flavour.name, selected: true},
                              });
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

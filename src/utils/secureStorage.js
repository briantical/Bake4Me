import AsyncStorage from '@react-native-community/async-storage';

const storeData = (storage_key, storage_value) => {
  AsyncStorage.setItem(storage_key, storage_value);
};

const readData = storage_key => {
  AsyncStorage.getItem(storage_key, (error, result) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log('Internal: ' + result);
    return result;
  });
};

export {readData, storeData};

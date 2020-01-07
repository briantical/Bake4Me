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
    return result;
  });
};

const setStateData = (storage_key, set_function) => {
  AsyncStorage.getItem(storage_key, (error, result) => {
    if (error) {
      console.log(error);
    }
    set_function(result);
  });
};

export {readData, storeData, setStateData};

import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const RNStorage = new Storage({
    size:100,
    storageBackend:AsyncStorage,
    defaultExpires:null,
});

global.RNStorage = RNStorage;



export default RNStorage;

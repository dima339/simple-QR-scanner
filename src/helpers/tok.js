import {AsyncStorage} from 'react-native';

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('idToken', token);
        console.log('token save!', token)
    } catch (error) {
        console.log('token has\'t been saved')
    }

};

const retrieveToken = async () => {
    try {
        const token = await AsyncStorage.getItem('idToken');
        if (token !== null) {
            console.log('retrieve Data:', token);
        }
        else {
            console.log('retrieve Data null');
        }
        return token;
    } catch (error) {
        console.log('retrieve Data error');
    }
};

const deleteToken = async () => {
   await AsyncStorage.removeItem('idToken', console.log('token delete'));
};

export {saveToken, retrieveToken, deleteToken};
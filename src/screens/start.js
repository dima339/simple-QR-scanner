import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {retrieveToken,deleteToken} from '../helpers/tok';


class Start extends Component {

    getQR = async () => {
        Alert.alert('Мой QR-код', await retrieveToken())
    };

    againQR = async () => {
        await deleteToken();
        this.props.navigation.navigate('Scanner')
    };

    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity
                    onPress={this.getQR}
                >
                    <View style={Styles.btn}>
                        <Text> Мой QR-код</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.againQR}
                >
                    <View style={Styles.btn}>
                        <Text> Сканировать QR-код заново</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'green',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25,
        marginBottom: 15
    },
    textQR: {
        color: 'grey',
        fontSize: 10
    }
});

export default Start;
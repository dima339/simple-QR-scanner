import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { saveToken } from '../helpers/tok'

class Scanner extends Component {

  state = {
    isModalVisible: true
  }

  async onSuccess (code) {
    console.log('QR code scanned!', code.data)
    await saveToken(code.data)
    this.props.navigation.navigate('Start')
  };

  render () {
    return (
      <View style={Styles.container}>

        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          bottomContent=
            {
              <Text style={Styles.centerText}>
                Сканируй QR-код
              </Text>
            }
          topViewStyle={Styles.topView}
          bottomViewStyle={Styles.topView}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  readQR: {
    backgroundColor: 'green',
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textQR: {
    color: 'grey',
    fontSize: 10
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: 'white'
  },
  topView: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Scanner

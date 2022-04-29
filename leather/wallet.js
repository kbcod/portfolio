import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

const imgs = {
  close: require('./img/close.png')
}

const Dimensions = require('Dimensions')
const HEIGHT = Dimensions.get('window').height

type Props = {}
export default class Wallet extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      address: 't3jA83N85VnHyT40JBcEynbUok81WcgF4gJkoP',
      action: 'Receive'
    }
  }

  componentWillMount() {
    this.setState({
        code: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${this.state.address}"`
    })
  }

  onPressClose = () => {}

  onPressSend = () => {}

  onPressShare = () => {}

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {this.state.action == 'Send' ? (
          <View style={styles.card}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => this.onPressClose()}>
                <Image source={imgs.close} />
              </TouchableOpacity>
              <Text style={styles.title}>{this.state.action.toUpperCase()}</Text>
              <View />
            </View>
            <View>
              <TextInput placeholder={'To'} placeholderTextColor={'#858585'} style={styles.input} />
              <TextInput placeholder={'Amount'} placeholderTextColor={'#858585'} style={styles.input} />
            </View>
            <TouchableOpacity onPress={() => this.onPressSend()} style={styles.sendContainer}>
              <Text style={styles.send}>SEND</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.card}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => this.onPressClose()}>
                <Image source={imgs.close} />
              </TouchableOpacity>
              <Text style={styles.title}>{this.state.action.toUpperCase()}</Text>
              <View />
            </View>
            <Image style={styles.qr} source={{ uri: this.state.code }} />
            <TouchableOpacity onPress={() => this.onPressShare()} style={styles.sendContainer}>
              <Text style={styles.send}>SHARE</Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#212121'
  },
  card: {
    width: '100%',
    height: HEIGHT * 0.5,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    justifyContent: 'space-between'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#3B3B3B',
    fontSize: 20,
    fontWeight: '800'
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1.5,
    textAlign: 'center',
    marginTop: 20
  },
  sendContainer: {
    alignSelf: 'center',
    width: 275,
    height: 55,
    backgroundColor: '#6969FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  send: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  qr: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'lightgray'
  }
})

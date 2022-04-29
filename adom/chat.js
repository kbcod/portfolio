import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native'

const imgs = {
  send: require('./img/send.png')
}

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          from: 'adom',
          time: '8:10',
          text: 'Ok Brenda where would you like to go today?'
        },
        {
          from: 'me',
          time: '8:25',
          text: 'Can you show me flights for Spain and Tokyo?'
        },
        {
          from: 'me',
          time: '8:35',
          text: 'Round trip please'
        },
        {
          from: 'adom',
          time: '8:37',
          text: 'Ok one moment..'
        }
      ]
    }
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }

  componentWilUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow() {}

  _keyboardDidHide() {}

  onPressOptions = () => {}

  onPressSend = () => {
    Keyboard.dismiss()
    var messages = this.state.messages
    messages.push({
      key: Date(),
      from: 'me',
      time: '8:40',
      text: this.state.text
    })
    this.refs.input.clear()
    this.setState({ messages })
  }

  onChangeText = text => {
    this.setState({ text })
  }

  onSubmit = () => {
    this.onPressSend()
  }

  renderMessage = message => {
    return (
      <View style={styles.messageContainer}>
        <View
          style={[styles.bubbleContainer, message.item.from == 'adom' ? styles.adomBubbleContainer : null]}>
          <Text style={styles.messageText}>{message.item.text}</Text>
        </View>

        <View style={[styles.timeContainer, message.item.from == 'adom' ? styles.adomTimeContainer : null]}>
          <Text style={styles.messageTime}>{message.item.time.toUpperCase()}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View />
          <Text style={styles.adom}>ADOM</Text>
          <TouchableOpacity onPress={() => this.onPressOptions()}>
            <Image source={imgs.options} />
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.messagesList}
          data={this.state.messages}
          renderItem={item => this.renderMessage(item)}
        />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.inputContainer}>
            <TextInput
              ref="input"
              onChangeText={text => this.onChangeText(text)}
              onSubmitEditing={() => this.onSubmit()}
              placeholderTextColor="#46484F"
              placeholder="Talk to me baby!"
              style={styles.input}
            />
            <TouchableOpacity style={styles.send} onPress={() => this.onPressSend()}>
              <Image source={imgs.send} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090909',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  header: {
    margin: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  adom: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '800'
  },
  messageContainer: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10
  },
  bubbleContainer: {
    width: 240,
    padding: 20,
    backgroundColor: '#131313',
    borderRadius: 3,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  adomBubbleContainer: {
    backgroundColor: '#050505',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start'
  },
  timeContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  adomTimeContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start'
  },
  messagesList: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 10
  },
  messageText: {
    color: 'white',
    fontWeight: '400'
  },
  messageTime: {
    color: 'white',
    fontWeight: '200'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%',
    backgroundColor: '#1D1F28'
  },
  input: {
    width: '90%',
    backgroundColor: '#1D1F28',
    color: 'white',
    opacity: 1,
    height: 50,
    paddingLeft: 40
  },
  send: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: '15%',
    height: '100%'
  }
})

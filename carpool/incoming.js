import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const imgs = {
  reject: require('./img/call-reject.png'),
  accept: require('./img/call-accept.png')
}

export default class Incoming extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      name: 'JACK',
      avatar: 'https://source.unsplash.com/random'
    }
  }

  onPressReject = () => {}

  onPressAccept = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.state.name}</Text>
        <Image style={styles.contactAvatar} source={{ uri: this.state.avatar }} />
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton} onPress={item => this.onPressReject()}>
            <Image source={imgs.reject} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} onPress={item => this.onPressAccept()}>
            <Image source={imgs.accept} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    backgroundColor: 'black'
  },
  name: { color: 'white', fontWeight: '800', fontSize: 30 },
  contactAvatar: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderColor: 'white',
    borderWidth: 5,
    marginTop: 20
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 30
  },
  controlButton: {
    margin: 10,
    borderColor: 'white',
    borderWidth: 3.5,
    borderRadius: 50
  }
})

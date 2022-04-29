import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'

const imgs = {
  close: require('./img/close.png'),
  flip: require('./img/flip.png'),
  focus: require('./img/focus.png')
}
type Props = {}
export default class Camera extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onPressAction = () => {}

  onPressGallery = () => {}

  onPressMode = () => {}

  onPressClose = () => {}

  onPressFlip = () => {}

  onPressFocus = () => {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <View style={styles.topContainer}>
            <TouchableOpacity onPress={() => this.onPressClose()}>
              <Image source={imgs.close} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPressFlip()}>
              <Image source={imgs.flip} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.focusContainer} onPress={() => this.onPressFocus()}>
            <Image source={imgs.focus} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => this.onPressMode()} style={styles.modeContainer}>
            <Text style={styles.mode}>PHOTO</Text>
          </TouchableOpacity>

          <View style={styles.controlsContainer}>
            <TouchableOpacity onPress={() => this.onPressGallery()}>
              <Image style={styles.preview} source={{ uri: 'https://source.unsplash.com/random' }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onPressAction()} style={styles.action} />
            <View style={{ width: '20%' }} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  topContainer: {
    width: '100%',
    top: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  focusContainer: {
    alignSelf: 'center'
  },
  cameraContainer: {
    flex: 0.75,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 0.25,
    backgroundColor: '#2D2D2E'
  },
  modeContainer: {
    alignSelf: 'center',
    marginTop: 10
  },
  mode: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  preview: {
    width: 60,
    height: 60,
    borderRadius: 3,
    marginLeft: 20
  },
  action: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#A0A0A1',
    borderColor: 'white',
    borderWidth: 5,
    alignSelf: 'center'
  }
})

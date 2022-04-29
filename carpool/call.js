import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity } from 'react-native'

const imgs = {
  end: require('./img/call-end.png'),
  flip: require('./img/call-flip.png'),
  mute: require('./img/call-mute.png')
}

export default class Call extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      live: 'https://source.unsplash.com/random',
      preview: 'https://picsum.photos/300/300'
    }
  }

  onPressEnd = () => {}

  onPressFlip = () => {}

  onPressMute = () => {}

  render() {
    return (
      <ImageBackground style={styles.previewContainer} source={{ uri: this.state.live }}>
        <View style={styles.callContainer}>
          <Image style={styles.frontCamera} source={{ uri: this.state.preview }} />
          <TouchableOpacity style={styles.end} onPress={item => this.onPressEnd()}>
            <Image source={imgs.end} />
          </TouchableOpacity>
        </View>
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton} onPress={item => this.onPressFlip()}>
            <Image source={imgs.flip} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} onPress={item => this.onPressMute()}>
            <Image source={imgs.mute} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },
  callContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  frontCamera: {
    width: '20%',
    height: '15%',
    margin: 15,
    borderColor: 'white',
    borderWidth: 2
  },
  end: { margin: 15 },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 50
  },
  controlButton: {
    margin: 10
  }
})

import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image, ImageBackground } from 'react-native'

const imgs = {
  upload: require('./img/upload.png')
}

type Props = {}
export default class Upload extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      background: 'https://source.unsplash.com/random'
    }
  }

  onPressUpload = () => {}

  onPressShare = () => {}

  render() {
    return (
      <ImageBackground source={{ uri: this.state.background }} style={styles.container}>
        <View style={styles.headerContainer}>
          <View />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>POST</Text>
          </View>
          <TouchableOpacity onPress={() => this.onPressUpload()}>
            <Image source={imgs.upload} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Insert caption" placeholderTextColor="white" />
          </View>
          <TouchableOpacity style={styles.shareContainer} onPress={() => this.onPressShare()}>
            <Text style={styles.share}>SHARE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    padding: 25,
    paddingTop: 50
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    borderRadius: 3,
    backgroundColor: 'rgba(98,98,98,0.5)',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 2
  },
  mainContainer: {},
  inputContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 12,
    borderColor: 'white',
    borderWidth: 1
  },
  input: {
    textAlign: 'center',
    flex: 1,
    color: 'white'
  },
  shareContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB7E70',
    padding: 15,
    borderRadius: 5
  },
  share: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  }
})

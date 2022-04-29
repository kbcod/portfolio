import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

const imgs = {
  close: require('./img/close.png'),
  photo: require('./img/photo.png')
}
type Props = {}
export default class Post extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      colors: ['#C06AEB', '#6AEBBB', '#EBD66A', '#EB856A', '#6A99EB'],
      bg: '#6A99EB'
    }
  }

  onPressClose = () => {}

  onPressPhoto = () => {}

  onPressSubmit = () => {}

  onPressBackground = () => {
    var background = this.state.bg
    var altColors = this.state.colors.filter(function(item) {
      return item != background
    })

    var bg = altColors[Math.floor(Math.random() * altColors.length)]

    this.setState({ bg })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>pipi</Text>
          <TouchableOpacity onPress={() => this.onPressClose()}>
            <Image source={imgs.close} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.onPressBackground()}
          style={[styles.pipContainer, { backgroundColor: this.state.bg }]}>
          <TouchableOpacity style={styles.photoContainer} onPress={() => this.onPressPhoto()}>
            <Image source={imgs.photo} />
          </TouchableOpacity>
          <TextInput numberOfLines={2} maxLength={120} placeholder="Say something crazy" style={styles.pip} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitContainer} onPress={() => this.onPressSubmit()}>
          <Text style={styles.submit}>PIP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292828'
  },
  headerContainer: {
    width: '100%',
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white'
  },
  photoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10
  },
  pipContainer: {
    height: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  pip: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 10,
    paddingRight: 10
  },
  submitContainer: {
    width: 220,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 75
  },
  submit: {
    color: '#252525',
    fontSize: 17,
    fontWeight: '800'
  }
})

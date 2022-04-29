import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image, ImageBackground } from 'react-native'

const imgs = {
  back: require('./img/back.png'),
  like: require('./img/like.png')
}

type Props = {}
export default class Post extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      background: 'https://source.unsplash.com/random',
      caption: 'Station H319',
      likes: 438
    }
  }

  onPressLike = () => {}

  onPressBack = () => {}

  render() {
    return (
      <ImageBackground source={{ uri: this.state.background }} style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <View style={styles.likesContainer}>
            <Text style={styles.likes}>{this.state.likes}</Text>
            <TouchableOpacity onPress={() => this.onPressLike()}>
              <Image source={imgs.like} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.captionContainer}>
            <Text style={styles.caption}>{this.state.caption}</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    padding: 25,
    paddingTop: 50
  },
  headerContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  likes: {
    marginRight: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: '600'
  },
  captionContainer: {
    width: '50%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    padding: 15,
    borderRadius: 5
  },
  caption: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  }
})

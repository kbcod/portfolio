import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'

const imgs = {
  close: require('./img/close.png')
}

type Props = {}
export default class Preview extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      title: 'A Time in Dark',
      author: 'Mark Ranson',
      cover: 'https://source.unsplash.com/random',
      summary:
        'Synth polaroid bitters chillwave pickled. Vegan disrupt tousled, Portland keffiyeh aesthetic food truck sriracha cornhole single-origin coffee church-key roof party. '
    }
  }

  onPressClose = () => {}

  onPressReviews = () => {}

  onPressRead = () => {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.onPressClose()}>
            <Image source={imgs.close} />
          </TouchableOpacity>
          <Text style={styles.title}>{this.state.title}</Text>
          <View />
        </View>
        <View style={styles.coverContainer}>
          <Image style={styles.cover} source={{ uri: this.state.cover }} />
        </View>
        <Text style={styles.author}>{this.state.author}</Text>
        <Text style={styles.summary}>{this.state.summary}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => this.onPressReviews()}>
            <Text style={styles.button}>REVIEWS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPressRead()}>
            <Text style={styles.button}>READ</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },
  header: {
    backgroundColor: 'rgba(255,255,255,0)',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 30
  },
  title: {
    textAlign: 'center',
    color: '#3E3E3E',
    fontSize: 20,
    fontWeight: '700'
  },
  coverContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  cover: {
    marginTop: 40,
    width: 220,
    height: 270,
    backgroundColor: 'lightgray',
    borderRadius: 4
  },
  author: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '300',
    color: '#6E6E6E'
  },
  summary: {
    marginTop: 35,
    textAlign: 'justify',
    fontSize: 12,
    fontWeight: '300',
    color: '#6E6E6E',
    lineHeight: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  button: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
    width: 100,
    padding: 10,
    margin: 5,
    color: '#545454',
    borderColor: '#999999',
    borderRadius: 3,
    borderWidth: 1
  }
})

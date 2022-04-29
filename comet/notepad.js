import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

const imgs = {
  new: require('./img/new.png')
}

type Props = {}

export default class Notepad extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      background: '#7249CC'
    }
  }

  onPressClose = () => {}

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.background }]}>
        <TouchableOpacity style={styles.close} onPress={() => this.onPressClose()}>
          <Image source={imgs.new} />
        </TouchableOpacity>
        <View style={styles.notepadContainer}>
          <TextInput
            placeholder="What's on your mind?"
            ref="input"
            multiline={true}
            maxLength={this.state.max}
            style={styles.notepadInput}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7249CC',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  close: {
    alignSelf: 'flex-end',
    padding: 20,
    transform: [{ rotate: '45 deg' }]
  },
  notepadContainer: {
    width: '100%',
    marginTop: 20
  },
  notepadInput: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: '95%',
    borderRadius: 5,
    color: 'white'
  }
})

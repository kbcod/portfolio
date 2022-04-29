import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onPressMood = mood => {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>HELLO BRENDA</Text>
        <Text style={styles.greeting}>HOW ARE YOU FEELING TODAY?</Text>
        <TouchableOpacity style={styles.mood}>
          <TouchableOpacity style={[styles.ring, styles.red]} onPress={() => this.onPressMood('HAPPY')} />
          <Text style={styles.moodText}>HAPPY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mood}>
          <TouchableOpacity style={[styles.ring, styles.blue]} onPress={() => this.onPressMood('SAD')} />
          <Text style={styles.moodText}>SAD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mood}>
          <TouchableOpacity style={[styles.ring, styles.yellow]} onPress={() => this.onPressMood('MAD')} />
          <Text style={styles.moodText}>MAD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mood}>
          <TouchableOpacity style={[styles.ring, styles.green]} onPress={() => this.onPressMood('BORED')} />
          <Text style={styles.moodText}>BORED</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 50
  },
  hello: {
    color: 'white',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '500'
  },
  greeting: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: 'white',
    marginTop: 15,
    fontSize: 20,
    fontWeight: '800'
  },
  mood: {
    backgroundColor: 'white',
    width: 280,
    height: 50,
    borderRadius: 2,
    marginTop: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  ring: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 100,
    borderStyle: 'solid',
    marginLeft: 15,
    justifyContent: 'center'
  },
  red: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 100
  },
  blue: {
    borderWidth: 2,
    borderColor: '#1D9EFB',
    borderRadius: 100
  },
  yellow: {
    borderWidth: 2,
    borderColor: '#FFD210',
    borderRadius: 100
  },
  green: {
    borderWidth: 2,
    borderColor: '#04AA21',
    borderRadius: 100
  },
  moodText: {
    marginLeft: 15,
    fontWeight: '600',
    fontSize: 16
  }
})

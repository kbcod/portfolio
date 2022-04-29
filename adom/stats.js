import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

const imgs = {
  next: require('./img/next.png')
}

export default class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dollars: '$150.00',
      meals: 7,
      miles: 200,
      sleep: 40
    }
  }

  onPressNext = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.last}>SINCE I SAW YOU LAST</Text>
        <View style={styles.seperator} />
        <Text style={styles.value}>{this.state.dollars}</Text>
        <Text style={styles.description}>DOLLARS SPENT</Text>
        <View style={styles.divider} />
        <Text style={styles.value}>{this.state.meals}</Text>
        <Text style={styles.description}>MEALS PURCHASED</Text>
        <View style={styles.divider} />
        <Text style={styles.value}>{this.state.miles}</Text>
        <Text style={styles.description}>MILES DRIVEN</Text>
        <View style={styles.divider} />
        <Text style={styles.value}>{this.state.sleep}</Text>
        <Text style={styles.description}>HOURS SLEPT</Text>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.next} onPress={() => this.onPressNext()}>
          <Image source={imgs.next} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 30
  },
  last: {
    color: 'white',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: '500'
  },
  seperator: {
    height: 1,
    width: '50%',
    backgroundColor: 'white',
    marginTop: 20
  },
  divider: {
    height: 2,
    width: '15%',
    backgroundColor: 'red',
    marginTop: 10
  },
  value: {
    color: 'white',
    fontSize: 24,
    marginTop: 30
  },
  description: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: '100',
    color: 'white'
  },
  next: {
    marginTop: 70
  }
})

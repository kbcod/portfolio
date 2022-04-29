import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, Image, Text } from 'react-native'

const imgs = {
  back: require('./img/location-back.png')
}

export default class Location extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      location: '4852 Oakwood Drive',
      distance: '5 mi',
      friends: '20'
    }
  }

  onPressBack = () => {}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.title}>LOCATION</Text>
          <View />
        </View>
        <ScrollView>
        <Text style={styles.subHeader}>{this.state.location}</Text>
        <View style={styles.map} />
        <Text style={styles.subHeader}>Distance</Text>
        <Text style={styles.text}>{this.state.distance}</Text>
        <Text style={styles.subHeader}>Buddies</Text>
        <Text style={styles.text}>{this.state.friends}</Text>
        <View style={styles.categoryContainer} />
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  back: { width: 25, height: 20 },
  title: { fontSize: 30, fontWeight: '800', color: 'black' },
  subHeader: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    marginBottom: 10,
    marginTop: 10
  },
  map: { width: '100%', height: 400, backgroundColor: 'gray', borderRadius: 5 },
  text: { fontSize: 15, fontWeight: '200', color: '#4D4D4F' },
  categoryContainer: {}
})

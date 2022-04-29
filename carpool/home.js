import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, FlatList, Text } from 'react-native'

const imgs = {
  call: require('./img/call.png'),
  distance: require('./img/distance.png')
}

const colors = [
  { color: '#1AFF6C' },
  { color: '#BA1AFF' },
  { color: '#1AB0FF' },
  { color: '#FF1A1A' },
  { color: '#FF521A' },
  { color: '#FFDA12' }
]

const Dimensions = require('Dimensions')

export default class Home extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {
          name: 'Bryan',
          last: '10h',
          distance: 0.5,
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Richard',
          last: '1h',
          distance: 1.0,
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Aubrey',
          last: '51m',
          distance: 1.5,
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Daisy',
          last: '42m',
          distance: 2.5,
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Duncan',
          last: '34m',
          distance: 2.0,
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Jennifer',
          last: '25m',
          distance: 0.45,
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Chrissy',
          last: '17m',
          distance: 0.5,
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Sarah',
          last: '8m',
          distance: 0.5,
          avatar: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressCall = () => {}

  onPressContact = contact => {}

  renderContact = contact => {
    var color = colors[Math.floor(Math.random() * colors.length)].color

    return (
      <TouchableOpacity
        style={[styles.contactContainer, { backgroundColor: color }]}
        onPress={item => this.onPressContact(contact.item)}>
        <View style={styles.contactBorderContainer}>
          <Text style={styles.user}>{contact.item.name}</Text>
          <Text style={styles.time}>{contact.item.last}</Text>
        </View>
        <Image style={styles.contactAvatar} source={{ uri: contact.item.avatar }} />
        <View style={styles.contactBorderContainer}>
          <Text style={styles.distance}>
            <Image source={imgs.distance} />
            {'  '}
            {contact.item.distance} mi
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.contactsList}
          renderItem={item => this.renderContact(item)}
          data={this.state.contacts}
        />
        <TouchableOpacity style={styles.callContainer} onPress={item => this.onPressCall()}>
          <Image source={imgs.call} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  callContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  contactsList: { flex: 1 },
  contactContainer: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 2,
    alignSelf: 'center'
  },
  contactBorderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  user: { fontSize: 15, fontWeight: '800', color: 'white' },
  time: { fontSize: 10, fontWeight: '200', color: 'white' },
  distance: { fontSize: 13, fontWeight: '400', color: 'white' },
  contactAvatar: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    borderRadius: Dimensions.get('window').width / 8,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 3
  }
})

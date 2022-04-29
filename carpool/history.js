import React, { Component } from 'react'
import { StyleSheet, View, TextInput, FlatList, TouchableOpacity, Image, Text } from 'react-native'

const imgs = {
  home: require('./img/call-home.png'),
  search: require('./img/search.png')
}

export default class History extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {
          name: 'Daisy',
          time: '30:40',
          date: 'APR 18',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Daisy',
          time: '10:00',
          date: 'APR 18',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Jennifer',
          time: '1:45:20',
          date: 'APR 18',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          name: 'Sarah',
          time: '25:10',
          date: 'APR 18',
          avatar: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressHome = () => {}

  onPressCall = contact => {}

  renderContact = contact => {
    return (
      <TouchableOpacity style={styles.callContainer} onPress={item => this.onPressCall(contact.item)}>
        <Image style={styles.contactAvatar} source={{ uri: contact.item.avatar }} />
        <View style={styles.callDetailsContainer}>
          <Text style={styles.user}>{contact.item.name}</Text>
          <Text style={styles.time}>{contact.item.time}</Text>
        </View>
        <Text style={styles.date}>{contact.item.date}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image source={imgs.search} />
          <TextInput placeholder="Search calls" placeholderTextColor="#232323" style={styles.search} />
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.contactsList}
          renderItem={item => this.renderContact(item)}
          data={this.state.contacts}
        />
        <TouchableOpacity style={styles.homeContainer} onPress={item => this.onPressHome()}>
          <Image source={imgs.home} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  search: {
    width: '100%',
    height: 50,
    color: 'black',
    fontWeight: '100',
    marginLeft: 10
  },
  contactsList: {
    marginTop: 5,
    borderTopColor: '#BEBEBE',
    borderTopWidth: 1
  },
  homeContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  callContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    borderBottomColor: '#BEBEBE',
    borderBottomWidth: 1
  },
  contactAvatar: { width: 60, height: 60, borderRadius: 30 },
  callDetailsContainer: { flex: 1, flexDirection: 'column', marginLeft: 30 },
  user: { fontSize: 15, fontWeight: '600', color: '#3F3F3F' },
  time: { fontSize: 10, fontWeight: '100', color: 'black', marginTop: 5 },
  date: { fontSize: 10, fontWeight: '600', color: 'black' }
})

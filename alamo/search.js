import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [
        {
          name: 'Abriella Bond',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Sam Rockwell',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Gerard Butler',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Jeremy Martinez',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Hayden Christensen',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Tiffani Thiessen',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Linnea Berthelsen',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Saffron Burrows',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Lauren German',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Zoey Deutch',
          photo: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onChangeText = text => {}

  onPressUser = user => {}

  renderUser = user => {
    return (
      <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(user.item)}>
        <Image style={styles.avatar} source={{ uri: user.item.photo }} />
        <Text style={styles.username}>{user.item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangeText(text)}
            placeholderTextColor="#DCDCDC"
            placeholder="Search friends"
          />
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={styles.usersList}
          data={this.state.users}
          renderItem={item => this.renderUser(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputContainer: {
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    textAlign: 'center',
    width: '100%'
  },
  placeholder: {
    fontSize: 10,
    color: '#DCDCDC',
    textAlign: 'center'
  },
  avatarContainer: {
    width: 100,
    height: 100,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center'
  },
  username: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 10,
    color: '#4F4F4F'
  }
})

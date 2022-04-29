import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList } from 'react-native'

const imgs = {
  back: require('./img/location-back.png')
}

export default class Following extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: 'Rebecca',
          photo: 'https://source.unsplash.com/random',
          follow: true
        },
        {
          name: 'Peter',
          photo: 'https://source.unsplash.com/random',
          follow: true
        },
        {
          name: 'Sophia',
          photo: 'https://source.unsplash.com/random',
          follow: false
        },
        {
          name: 'Micheal',
          photo: 'https://source.unsplash.com/random',
          follow: true
        }
      ]
    }
  }

  onPressUser = user => {}

  onPressFollow = () => {}

  renderUser = user => {
    return (
      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(user.item)}>
          <Image style={styles.avatar} source={{ uri: user.item.photo }} />
        </TouchableOpacity>
        <View style={styles.followContainer}>
          <Text style={styles.username}>{user.item.name}</Text>
          <TouchableOpacity
            style={user.item.follow ? styles.followButton : styles.unfollowButton}
            onPress={item => this.onPressFollow()}>
            <Text style={user.item.follow ? styles.follow : styles.unfollow}> {user.item.follow ? 'Unfollow' : 'Follow'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.title}>FOLLOWING</Text>
          <View />
        </View>
        <View style={styles.seperator} />
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.usersList}
          renderItem={item => this.renderUser(item)}
          data={this.state.users}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  back: { width: 25, height: 20, paddingLeft: 10 },
  title: { fontSize: 20, fontWeight: '600', color: '#4D4D4F' },
  seperator: {
    flexDirection: 'row',
    backgroundColor: '#4D4D4F',
    width: '100%',
    height: 1,
    marginTop: 10
  },
  usersList: { flex: 1, marginTop: 10 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center'
  },
  username: {
    color: '#4D4D4F',
    fontSize: 20,
    fontWeight: '600'
  },
  userContainer: {
    flexDirection: 'row',
    padding: 20
  },
  followContainer: {
    marginLeft: 20,
    flexDirection: 'column'
  },
  followButton: {
    width: 130,
    height: 30,
    alignSelf: 'center',
    backgroundColor: '#FE5050',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  follow: { fontSize: 15, fontWeight: '400', color: 'white' },
  unfollowButton: {
    width: 130,
    height: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#FE5050',
    borderWidth: 1,
    marginTop: 10
  },
  unfollow: { fontSize: 15, fontWeight: '400', color: '#FE5050' }
})

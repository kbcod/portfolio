import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'

type Props = {}
export default class Profile extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      uid: 8433942,
      name: 'Janice Johnson',
      location: 'Hilden',
      following: 50,
      posts: 30,
      followers: 800,
      avatar: 'https://picsum.photos/300/300',
      feed: [
        {
          content: 'https://source.unsplash.com/random'
        },
        {
          content: 'https://source.unsplash.com/random'
        },
        {
          content: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressAvatar = user => {}

  onPressPost = post => {}

  renderPost = post => {
    return (
      <TouchableOpacity style={styles.postContainer} onPress={() => this.onPressPost(post.item)}>
        <Image source={{ uri: post.item.content }} style={styles.post} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressAvatar(this.state.uid)}>
          <Image source={{ uri: this.state.avatar }} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.location}>{this.state.location}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statContainer}>
            <Text style={styles.stat}>{this.state.following}</Text>
            <Text style={styles.statTitle}>Following</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.stat}>{this.state.posts}</Text>
            <Text style={styles.statTitle}>Posts</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.stat}>{this.state.followers}</Text>
            <Text style={styles.statTitle}>Followers</Text>
          </View>
        </View>
        <FlatList
          style={styles.postsList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={item => this.renderPost(item)}
          data={this.state.feed}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50
  },
  avatarContainer: {
    margin: 20,
    marginTop: 0
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#C2C2C2'
  },
  name: {
    color: '#4C4C4C',
    fontSize: 25,
    fontWeight: '700'
  },
  location: {
    color: '#4C4C4C',
    fontSize: 15,
    fontWeight: '100'
  },
  statsContainer: {
    marginTop: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  stat: {
    color: '#4C4C4C',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center'
  },
  statTitle: {
    color: '#BEBEBE',
    fontSize: 15,
    fontWeight: '100',
    textAlign: 'center'
  },
  postsList: {
    marginTop: 40,
    paddingLeft: 20
  },
  post: {
    width: 275,
    height: 185,
    borderRadius: 5,
    marginRight: 20
  },
  postContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  }
})

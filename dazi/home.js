import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'

const imgs = {
  like: require('./img/like.png'),
  comment: require('./img/comment.png')
}
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        {
          uid: 4839201,
          time: '1h',
          likes: 40,
          comments: 10,
          caption: 'Took my breath away',
          content: 'https://source.unsplash.com/random',
          avatar: 'https://picsum.photos/300/300'
        },
        {
          uid: 9471103,
          time: '2h',
          likes: 90,
          comments: 80,
          caption: 'Life from the sky',
          content: 'https://source.unsplash.com/random',
          avatar: 'https://picsum.photos/300/300'
        },
        {
          uid: 5039234,
          time: '2h',
          likes: 200,
          comments: 100,
          caption: 'Wish you guys could be here',
          content: 'https://source.unsplash.com/random',
          avatar: 'https://picsum.photos/300/300'
        }
      ]
    }
  }

  onPressAvatar = user => {}

  onPressLike = post => {}

  onPressComment = post => {}

  renderPost = post => {
    return (
      <View source={{ uri: post.item.content }} style={styles.postContainer}>
        <Text style={styles.time}>{post.item.time}</Text>
        <ImageBackground source={{ uri: post.item.content }} style={styles.content}>
          <View style={styles.likesContainer}>
            <TouchableOpacity onPress={() => this.onPressLike(post.item)}>
              <Image source={imgs.like} style={styles.likes} />
            </TouchableOpacity>
            <Text style={styles.count}>{post.item.likes}</Text>
            <TouchableOpacity onPress={() => this.onPressComment(post.item)}>
              <Image source={imgs.comment} style={styles.comments} />
            </TouchableOpacity>
            <Text style={styles.count}>{post.item.comments}</Text>
          </View>
        </ImageBackground>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressAvatar(post.item.uid)}>
          <Image source={{ uri: post.item.avatar }} style={styles.avatar} />
        </TouchableOpacity>

        <Text style={styles.caption}>{post.item.caption}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>DAZI</Text>
        </View>
        <FlatList
          style={styles.feedContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.content + item.caption}
          renderItem={item => this.renderPost(item)}
          data={this.state.feed}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 20
  },
  header: { fontSize: 30, fontWeight: '700' },
  feedContainer: {},
  postContainer: {
    paddingRight: 50,
    marginBottom: 30
  },
  time: { color: '#CACACA', fontSize: 15, fontWeight: '700', padding: 10 },
  content: {
    height: 230,
    backgroundColor: '#434343',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  likesContainer: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginLeft: 20
  },
  count: { color: 'white', fontSize: 15, fontWeight: '700' },
  avatarContainer: {
    margin: 20,
    marginTop: 0,
    top: 0,
    right: 0,
    position: 'absolute'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#C2C2C2'
  },
  caption: {
    color: '#6A6A6A',
    marginTop: 10,
    marginLeft: 20,
    fontWeight: '100'
  }
})

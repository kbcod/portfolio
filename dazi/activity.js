import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native'

export default class Activity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'likes',
      likes: [
        {
          uid: 4839201,
          username: 'Madison Price',
          avatar: 'https://picsum.photos/300/300',
          time: '10m',
          content: 'https://source.unsplash.com/random'
        },
        {
          uid: 345361,
          username: 'Diane Owens',
          avatar: 'https://picsum.photos/300/300',
          time: '20m',
          content: 'https://source.unsplash.com/random'
        },
        {
          uid: 987572,
          username: 'Brian Griffin',
          avatar: 'https://picsum.photos/300/300',
          time: '55m',
          content: 'https://source.unsplash.com/random'
        },
        {
          uid: 1182902,
          username: 'Lauren Mitchell',
          avatar: 'https://picsum.photos/300/300',
          time: '1h',
          content: 'https://source.unsplash.com/random'
        },
        {
          uid: 586992,
          username: 'Larry Mills',
          avatar: 'https://picsum.photos/300/300',
          time: '1h',
          content: 'https://source.unsplash.com/random'
        },
        {
          uid: 8927119,
          username: 'Joshua Ray',
          avatar: 'https://picsum.photos/300/300',
          time: '3h',
          content: 'https://source.unsplash.com/random'
        },
        {
          uid: 22839381,
          username: 'Jesse Wells',
          avatar: 'https://picsum.photos/300/300',
          time: '5h',
          content: 'https://source.unsplash.com/random'
        }
      ],
      comments: [
        {
          uid: 4839201,
          username: 'Madison Price',
          avatar: 'https://picsum.photos/300/300',
          time: '10m',
          content: 'https://source.unsplash.com/random',
          comment: 'Cool'
        },
        {
          uid: 345361,
          username: 'Diane Owens',
          avatar: 'https://picsum.photos/300/300',
          time: '20m',
          content: 'https://source.unsplash.com/random',
          comment: 'Looking good'
        },
        {
          uid: 987572,
          username: 'Brian Griffin',
          avatar: 'https://picsum.photos/300/300',
          time: '55m',
          content: 'https://source.unsplash.com/random',
          comment: 'I knew I saw you!'
        },
        {
          uid: 1182902,
          username: 'Lauren Mitchell',
          avatar: 'https://picsum.photos/300/300',
          time: '1h',
          content: 'https://source.unsplash.com/random',
          comment: 'Pretty girl'
        },
        {
          uid: 586992,
          username: 'Larry Mills',
          avatar: 'https://picsum.photos/300/300',
          time: '1h',
          content: 'https://source.unsplash.com/random',
          comment: 'Just like old times'
        },
        {
          uid: 8927119,
          username: 'Joshua Ray',
          avatar: 'https://picsum.photos/300/300',
          time: '3h',
          content: 'https://source.unsplash.com/random',
          comment: 'Tell Missy call me'
        },
        {
          uid: 22839381,
          username: 'Jesse Wells',
          avatar: 'https://picsum.photos/300/300',
          time: '5h',
          content: 'https://source.unsplash.com/random',
          comment: '4 stars'
        }
      ]
    }
  }

  onPressUser = user => {}

  onPressPost = post => {}

  onPressLikes = () => {
    this.setState({ tab: 'likes' })
  }

  onPressComments = () => {
    this.setState({ tab: 'comments' })
  }

  renderLike = like => {
    return (
      <View style={styles.activityContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(like.item.uid)}>
          <Image style={styles.avatar} source={{ uri: like.item.avatar }} />
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <Text style={styles.username}>
            {like.item.username} <Text style={styles.body}>liked your post</Text>{' '}
          </Text>
          <Text style={styles.time}>{like.item.time}</Text>
        </View>
        <TouchableOpacity onPress={() => this.onPressPost(like.item)}>
          <Image style={styles.preview} source={{ uri: like.item.content }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderComment = comment => {
    return (
      <View style={styles.activityContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(comment.item.uid)}>
          <Image style={styles.avatar} source={{ uri: comment.item.avatar }} />
        </TouchableOpacity>
        <View style={[styles.bodyContainer, { width: '70%' }]}>
          <Text style={styles.username}>
            {comment.item.username}{' '}
            <Text style={styles.body}>commented {JSON.stringify(comment.item.comment)}</Text>{' '}
          </Text>
          <Text style={styles.time}>{comment.item.time}</Text>
        </View>
        <TouchableOpacity onPress={() => this.onPressPost(comment.item)}>
          <Image style={styles.preview} source={{ uri: comment.item.content }} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>ACTIVITY</Text>
        </View>
        {this.state.tab == 'likes' ? (
          <FlatList
            style={styles.mainList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderLike(item)}
            data={this.state.likes}
            extraData={this.state}
          />
        ) : (
          <FlatList
            style={styles.mainList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderComment(item)}
            data={this.state.comments}
            extraData={this.state}
          />
        )}

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            onPress={() => this.onPressLikes()}
            style={[styles.tab, this.state.tab == 'likes' ? styles.tabActive : null]}>
            <Text style={[styles.tabButton, this.state.tab == 'likes' ? styles.tabButtonActive : null]}>
              LIKES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPressComments()}
            style={[styles.tab, this.state.tab == 'comments' ? styles.tabActive : null]}>
            <Text style={[styles.tabButton, this.state.tab == 'comments' ? styles.tabButtonActive : null]}>
              COMMENTS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  header: { fontSize: 30, fontWeight: '700' },
  backContainer: {
    paddingLeft: 20
  },
  mainList: {
    paddingTop: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C2C2C2'
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 10,
    marginRight: 10
  },
  bodyContainer: {
    flexDirection: 'column',
    width: '60%'
  },
  username: {
    color: '#CACACA',
    fontWeight: '700'
  },
  time: {
    marginTop: 5,
    fontSize: 13,
    color: '#454545',
    fontWeight: '500',
    marginRight: 30
  },
  body: {
    color: '#2A2A2A',
    fontWeight: '500'
  },
  preview: {
    alignSelf: 'flex-end',
    width: 45,
    height: 45,
    borderRadius: 5
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: 50
  },
  input: {
    flex: 1,
    color: 'black',
    height: 50,
    paddingLeft: 30
  },
  post: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414141',
    padding: 10,
    right: 10,
    width: 80,
    borderRadius: 3
  },
  tab: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabActive: {
    backgroundColor: '#414141'
  },
  tabButton: {
    color: '#414141',
    fontSize: 15,
    fontWeight: '800'
  },
  tabButtonActive: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800'
  }
})

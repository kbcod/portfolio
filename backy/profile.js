import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'

const imgs = {
  settings: require('./img/profile-settings.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

export default class Profile extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      bg: 'https://picsum.photos/400/400',
      user: 'Charles',
      bio: 'The world is my ocean',
      avatar: 'https://picsum.photos/300/300',
      following: 18,
      followers: '15k',
      posts: [
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' },
        { photo: 'https://source.unsplash.com/random' }
      ]
    }
  }

  onPressAvatar = () => {}

  onPressSettings = () => {}

  onPressFollow = () => {}

  onPressPost = () => {}

  renderPost = activity => {
    return (
      <TouchableOpacity onPress={() => this.onPressPost(activity.item)}>
        <Image source={{ uri: activity.item.photo }} style={styles.activityPhoto} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.headerContainer} source={{ uri: this.state.bg }}>
          <View style={styles.topContainer}>
            <View style={styles.userContainer}>
              <Text style={styles.title}>{this.state.user}</Text>
              <Text style={styles.bio}>{this.state.bio}</Text>
            </View>
            <TouchableOpacity onPress={item => this.onPressAvatar()}>
              <Image style={styles.avatar} source={{ uri: this.state.avatar }} />
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.numsContainer}>
              <View style={styles.numContainer}>
                <Text style={styles.count}>{this.state.following}</Text>
                <Text style={styles.statLabel}>FOLLOWING</Text>
              </View>
              <View style={styles.seperator} />
              <View style={styles.numContainer}>
                <Text style={styles.count}>{this.state.followers}</Text>
                <Text style={styles.statLabel}>FOLLOWERS</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.settings} onPress={item => this.onPressSettings()}>
              <Image source={imgs.settings} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.followButton} onPress={item => this.onPressFollow()}>
            <Text style={styles.follow}>Follow</Text>
          </TouchableOpacity>
        </ImageBackground>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          numColumns={3}
          style={styles.postsList}
          renderItem={item => this.renderPost(item)}
          data={this.state.posts}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    height: 250,
    flexDirection: 'column',
    backgroundColor: 'darkgray',
    justifyContent: 'space-between',
    padding: 20
  },
  userContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: { fontSize: 30, fontWeight: '800', color: 'white' },
  bio: { fontSize: 15, fontWeight: '400', color: 'white' },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  profile: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 20,
    width: 60,
    height: 60,
    borderRadius: 30
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  numsContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  numContainer: { flexDirection: 'column', justifyContent: 'space-between' },
  count: { fontSize: 20, fontWeight: '500', color: 'white' },
  statLabel: { fontSize: 15, fontWeight: '300', color: 'white', marginTop: 5 },
  seperator: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '100%',
    width: 1
  },
  settings: { width: 30, height: 30 },
  followButton: {
    width: '70%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#FE5050',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  follow: { fontSize: 15, fontWeight: '400', color: 'white' },
  postsList: { flex: 1 },
  activityPhoto: {
    flex: 1,
    width: WIDTH / 3 - 2,
    height: WIDTH / 3 - 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'lightgray',
    margin: 1
  }
})

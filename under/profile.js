import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

const imgs = {
  back: require('./img/back.png')
}
type Props = {}
export default class Profile extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      uid: 8433942,
      name: 'Amy Gordon',
      bio: 'Cras quis nulla commodo',
      following: 5,
      pages: 20,
      followers: 500,
      avatar: 'https://picsum.photos/300/300',
      posts: [
        {
          title: 'Building and Losing Muscles Over 5 Years',
          preview: 'https://source.unsplash.com/random',
          date: 'JANUARY 15, 2017'
        },
        {
          title: 'I Think Today I Had My Last Bag of Chips',
          preview: 'https://source.unsplash.com/random',
          date: 'JANUARY 1, 2017'
        },
        {
          title: 'Learning How to Swim Was Exactly What I Expected',
          preview: 'https://source.unsplash.com/random',
          date: 'DECEMBER 24, 2016'
        }
      ]
    }
  }

  onPressBack = () => {}

  onPressFollow = () => {}

  onPressPage = page => {}

  renderPage = page => {
    return (
      <TouchableOpacity onPress={() => this.onPressPage(page.item)} style={styles.pageContainer}>
        <View>
          <Text style={styles.title}>{page.item.title}</Text>
          <Text style={styles.date}>{page.item.date}</Text>
        </View>
        <Image style={styles.image} source={{ uri: page.item.preview }} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>PROFILE</Text>
        </View>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressAvatar(this.state.uid)}>
          <Image source={{ uri: this.state.avatar }} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.bio}>{this.state.bio}</Text>
        <View style={styles.seperator} />
        <View style={styles.statsContainer}>
          <View style={styles.statContainer}>
            <Text style={styles.stat}>{this.state.following}</Text>
            <Text style={styles.statTitle}>FOLLOWING</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.stat}>{this.state.pages}</Text>
            <Text style={styles.statTitle}>PAGES</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.stat}>{this.state.followers}</Text>
            <Text style={styles.statTitle}>FOLLOWERS</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.onPressFollow()} style={styles.followContainer}>
          <Text style={styles.follow}>Follow</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.pagesList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={item => this.renderPage(item)}
          data={this.state.posts}
          extraData={this.state}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  backContainer: {
    position: 'absolute',
    top: 30,
    left: 15
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '700'
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
  bio: {
    color: '#4C4C4C',
    fontSize: 15,
    fontWeight: '100'
  },
  seperator: {
    width: '60%',
    height: 1,
    marginTop: 15,
    marginBottom: 25,
    backgroundColor: '#E7E9E9'
  },
  statsContainer: {
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
    fontWeight: '300',
    textAlign: 'center'
  },
  statTitle: {
    color: '#4C4C4C',
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center'
  },
  followContainer: {
    marginTop: 30,
    width: '70%',
    height: 50,
    backgroundColor: '#377EFE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  follow: {
    color: 'white'
  },
  pagesList: {
    padding: 20,
    alignSelf: 'stretch',
    marginTop: 20
  },
  pageContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  image: {
    position: 'absolute',
    right: 0,
    width: 80,
    height: 80,
    borderRadius: 3
  },
  title: {
    color: '#4A4A4A',
    fontSize: 18,
    fontWeight: '500',
    width: '60%'
  },
  date: {
    color: '#377EFE',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 20
  }
})

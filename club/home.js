import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text
} from 'react-native'

const imgs = {
  search: require('./img/search.png'),
  views: require('./img/stream-views.png')
}

export default class Home extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      streams: [
        {
          name: 'Shirley Stanley',
          username: '@shirley',
          time: '10:45',
          views: 27,
          title: 'Hiking in the Alps',
          preview: 'https://source.unsplash.com/random'
        },
        {
          name: 'Shirley Stanley',
          username: '@shirley',
          time: '10:45',
          views: 498,
          title: 'Going Downtown With the Girls',
          preview: 'https://source.unsplash.com/random'
        },
        {
          name: 'Alan Rivera',
          username: '@homebound12',
          time: '30:20',
          views: 602,
          title: 'Club Life',
          preview: 'https://source.unsplash.com/random'
        }
      ]
    }
  }


  onPressStream = stream => {}

  renderStream = stream => {
    return (
      <TouchableOpacity style={styles.streamContainer} onPress={item => this.onPressStream(stream.item)}>
        <ImageBackground source={{ uri: stream.item.preview }} style={styles.streamPreview}>
          <View style={styles.tint} />
          <View>
            <View style={styles.streamTopContainer}>
              <View style={styles.liveContainer}>
                <Text style={styles.live}>LIVE</Text>
                <Text style={styles.views}>{stream.item.views}</Text>
                <Image source={imgs.views} />
              </View>
              <Text style={styles.time}>{stream.item.time}</Text>
            </View>
            <View style={styles.userContainer}>
              <Text style={styles.username}>{stream.item.username}</Text>
              <Text style={styles.user}>{stream.item.name}</Text>
            </View>
          </View>
          <Text style={styles.streamTitle}>{stream.item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={imgs.search} />
          <TextInput placeholder="Find a Friend" placeholderTextColor="#D6D6D6" style={styles.search} />
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.streamsList}
          renderItem={item => this.renderStream(item)}
          data={this.state.streams}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: '#BEBEBE',
    borderBottomWidth: 1
  },
  search: {
    width: '100%',
    height: 40,
    color: 'black',
    fontWeight: '100',
    marginLeft: 10
  },
  searchIcon: {
    tintColor: '#BEBEBE'
  },
  streamsList: {
    marginTop: 5,
  },
  homeContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  streamPreview: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between'
  },
  tint: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%'
  },
  streamTitle: {
    margin: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: '400'
  },
  streamContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  streamTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userContainer: { marginLeft: 10 },
  liveContainer: { flexDirection: 'row', alignItems: 'center' },
  live: {
    width: 60,
    height: 25,
    backgroundColor: '#FF2500',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    paddingTop: 4
  },
  views: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10
  },
  user: { fontSize: 15, fontWeight: '600', color: 'white' },
  username: { fontSize: 10, fontWeight: '100', color: 'white', marginTop: 5 },
  date: { fontSize: 10, fontWeight: '600', color: 'black' },
  time: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    paddingTop: 4,
    marginLeft: 10,
    marginRight: 10
  }
})

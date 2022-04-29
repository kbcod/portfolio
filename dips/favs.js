import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  FlatList,
  TextInput
} from 'react-native'

const imgs = {
  like: require('./img/like-selected.png'),
  menu: require('./img/menu.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

type Props = {}

export default class Favs extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      favs: [
        {
          title: 'Midnight Lunar Timelapse',
          time: 5000,
          duration: '20:45',
          preview: 'https://source.unsplash.com/random'
        },

        {
          title: '100 Hour Nap',
          time: 5000,
          duration: '20:45',
          preview: 'https://source.unsplash.com/random'
        },

        {
          title: 'Dinner For Two',
          time: 5000,
          duration: '55:50',
          preview: 'https://source.unsplash.com/random'
        },

        {
          title: 'Norwegian Chocolate Unboxing',
          time: 5000,
          duration: '10:30',
          preview: 'https://source.unsplash.com/random'
        },

        {
          title: 'Super Slo Mo 360 Kickflip',
          time: 5000,
          duration: '25:10',
          preview: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressMenu = () => {}

  onPressVideo = video => {}

  renderFav = fav => {
    return (
      <View style={styles.favContainer}>
        <TouchableOpacity onPress={() => this.onPressVideo(fav.item)} style={styles.vidContainer}>
          <Image style={styles.vid} source={{ uri: fav.item.preview }} />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.vidTitle}>{fav.item.title}</Text>
            <Text style={styles.time}>{fav.item.duration}</Text>
          </View>
          <TouchableOpacity onPress={() => this.onPressLike()} style={styles.likeContainer}>
            <Image source={imgs.like} />
          </TouchableOpacity>
          <View />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressMenu()}>
            <Image source={imgs.menu} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: '#00FFFB', left: -3, top: 4 }]}>DIPS</Text>
            <Text style={[styles.title, { color: '#8AFF00', left: -2, top: 3 }]}>DIPS</Text>
            <Text style={[styles.title, { color: '#FF0000', left: -1, top: 2 }]}>DIPS</Text>
            <Text style={[styles.title, { color: '#FFFFFF', left: 0, top: 0 }]}>DIPS</Text>
          </View>
          <View style={styles.empty} />
        </View>
        <FlatList
          contentContainerStyle={styles.favsList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          data={this.state.favs}
          renderItem={item => this.renderFav(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    padding: 15
  },
  headerContainer: {
    height: 30,
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleContainer: {
    paddingRight: '25%',
    bottom: 20
  },
  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    left: 0
  },
  favsList: {
    paddingTop: 10
  },
  favContainer: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row'
  },
  vidContainer: {
    width: WIDTH * 0.4,
    height: WIDTH * 0.35,
    backgroundColor: '#101010'
  },
  vidTitle: {
    color: 'white',
    width: 200
  },
  vid: {
    height: '100%',
    width: '100%'
  },
  infoContainer: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  likeContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  time: {
    color: '#686868',
    marginTop: 5
  }
})

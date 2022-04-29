import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native'

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

const imgs = {
  like: require('./img/like.png'),
  comment: require('./img/comment.png'),
  options: require('./img/options.png'),
  create: require('./img/create.png')
}
type Props = {}
export default class Home extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      pips: [
        {
          pip: 'Last time I went camping I went 3 days without food or water',
          location: 'Rome, Italty',
          image: 'https://source.unsplash.com/random',
          likes: 10,
          comments: 200
        },
        {
          pip: 'I enjoy going on dates with men and using them for meals',
          location: 'San Francisco, California',
          bg: '#FF4444',
          likes: 50,
          comments: 130
        }
      ]
    }
  }

  onPressOptions = pip => {}

  onPressLike = pip => {}

  onPressComment = pip => {}

  renderPip = pip => {
    return (
      <ImageBackground
        source={{ uri: pip.item.image }}
        blurRadius={10}
        style={[styles.pipContainer, pip.item.bg ? { backgroundColor: pip.item.bg } : null]}>
        <View style={styles.empty} />
        <View style={styles.bodyContainer}>
          <Text style={styles.pip}>{pip.item.pip}</Text>
          <View style={styles.seperator} />
          <Text style={styles.location}>{pip.item.location}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => this.onPressOptions(pip.item)}>
              <Image source={imgs.options} />
            </TouchableOpacity>
          </View>
          <View style={styles.likesContainer}>
            <TouchableOpacity onPress={() => this.onPressLike(pip.item)}>
              <Image source={imgs.like} />
            </TouchableOpacity>
            <Text style={styles.count}>{pip.item.likes}</Text>
            <TouchableOpacity onPress={() => this.onPressComment(pip.item)}>
              <Image source={imgs.comment} />
            </TouchableOpacity>
            <Text style={styles.count}>{pip.item.comments}</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.pipsList}
          data={this.state.pips}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={(item, index) => this.renderPip(item)}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.title}>pipi</Text>
          <TouchableOpacity>
            <Image source={imgs.create} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    width: '100%',
    marginTop: 20,
    padding: 20,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white'
  },
  pipContainer: {
    height: WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  empty: {
    width: '100%',
    height: '10%'
  },
  bodyContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  pip: {
    width: '80%',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25
  },
  seperator: {
    width: '15%',
    height: 2,
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 15
  },
  location: {
    color: 'white',
    fontSize: 15,
    fontWeight: '100',
    textAlign: 'center'
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  likesContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  count: { fontSize: 15, fontWeight: '100', color: 'white' }
})

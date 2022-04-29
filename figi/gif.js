import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from 'react-native'

const imgs = {
  back: require('./img/back.png'),
  like: require('./img/post-like.png'),
  download: require('./img/post-download.png'),
  share: require('./img/post-share.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

type Props = {}
export default class GIF extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Crazy Space GIF',
      content: 'https://picsum.photos/600/600',
      related: [
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        },
        {
          preview: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressBack = () => {}

  onPressDownload = () => {}

  onPressShare = () => {}

  onPressLike = () => {}

  onPressResult = result => {}

  renderResult = result => {
    var height = Math.floor(Math.random() * WIDTH * 0.3) + WIDTH * 0.2

    return (
      <TouchableOpacity onPress={() => this.onPressResult(result.item)} style={styles.relatedResultContainer}>
        <Image
          style={{ width: WIDTH * 0.32, height, backgroundColor: 'white' }}
          source={{ uri: result.item.preview }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    var related = this.state.related
    var m, n
    var left, middle, right

    a = Math.ceil(related.length / 3)
    b = Math.ceil(2 * related.length / 3)

    left = related.slice(0, a)
    middle = related.slice(a, b)
    right = related.slice(b, related.length)

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.header}>{this.state.title}</Text>
          <View />
        </View>
        <View style={styles.postContainer}>
          <ImageBackground style={styles.content} source={{ uri: this.state.content }}>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => this.onPressDownload()}>
                <Image source={imgs.download} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressShare()}>
                <Image source={imgs.share} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressLike()}>
                <Image source={imgs.like} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.seperator} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.relatedContainer}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            data={left}
            renderItem={item => this.renderResult(item)}
          />
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            data={middle}
            renderItem={item => this.renderResult(item)}
          />
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            data={right}
            renderItem={item => this.renderResult(item)}
          />
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    paddingBottom: 0
  },
  postContainer: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  content: {
    width: WIDTH,
    height: WIDTH * 0.8
  },
  buttonsContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10
  },
  seperator: {
    backgroundColor: 'white',
    width: '100%',
    height: 3
  },
  preview: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  relatedResultContainer: {
    margin: 2,
    alignItems: 'center'
  },
  relatedContainer: {
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

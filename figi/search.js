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
  ImageBackground,
  FlatList
} from 'react-native'

const imgs = {
  upload: require('./img/upload.png'),
  favs: require('./img/favs.png'),
  home: require('./img/home.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

colors = ['#FF4F00', '#0036FF', '#00FF99', '#FFD400']

type Props = {}
export default class Search extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      popular: ['Drake', 'red carpet', 'celebs', 'trophy', 'fashion', 'audience', 'cheering', 'speech'],
      results: [
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

  onPressUpload = () => {}

  onPressFavs = () => {}

  onPressHome = () => {}

  onPressPopular = popular => {}

  onPressResult = result => {}

  renderPopular = popular => {
    return (
      <TouchableOpacity
        style={[styles.tagContainer, { backgroundColor: colors[(popular.index + popular.index % 3) % 4] }]}
        onPress={() => this.onPressPopular(popular.item)}>
        <Text style={styles.tag}>{popular.item}</Text>
      </TouchableOpacity>
    )
  }

  renderResult = result => {
    var height = Math.floor(Math.random() * WIDTH * 0.3) + WIDTH * 0.2

    return (
      <TouchableOpacity onPress={() => this.onPressResult(result.item)} style={styles.resultContainer}>
        <Image
          style={{ width: WIDTH * 0.3, height, backgroundColor: 'white' }}
          source={{ uri: result.item.preview }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    var results = this.state.results
    var m, n
    var left, middle, right

    a = Math.ceil(results.length / 3)
    b = Math.ceil(2 * results.length / 3)

    left = results.slice(0, a)
    middle = results.slice(a, b)
    right = results.slice(b, results.length)

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>FIGI</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => this.onPressUpload()}>
              <Image source={imgs.upload} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPressFavs()}>
              <Image source={imgs.favs} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPressHome()}>
              <Image source={imgs.home} style={styles.button} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Find a Figi" placeholderTextColor="#686868" style={styles.search} />
          <View style={styles.seperator} />
        </View>
        <View style={styles.tagsContainer}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            data={this.state.popular}
            renderItem={item => this.renderPopular(item)}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.resultsContainer}>
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
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 5
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    marginLeft: 10
  },
  searchContainer: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  search: {
    width: '100%',
    height: 40,
    color: 'white',
    fontWeight: '100'
  },
  seperator: {
    backgroundColor: 'white',
    width: '100%',
    height: 1
  },
  preview: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  tagsContainer: {
    padding: 0,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  tagContainer: {
    borderColor: 'white',
    borderWidth: 1
  },
  tag: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15
  },
  resultContainer: {
    margin: 2
  },
  resultsContainer: {
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

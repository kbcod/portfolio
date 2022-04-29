import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'

const imgs = {
  home: require('./img/home.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

type Props = {}
export default class Category extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      category: 'TURNT',
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

  onPressHome = () => {}

  onPressResult = result => {}

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
          <Text style={styles.header}>{this.state.category}</Text>
          <TouchableOpacity onPress={() => this.onPressHome()}>
            <Image source={imgs.home} />
          </TouchableOpacity>
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
    paddingBottom: 10
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

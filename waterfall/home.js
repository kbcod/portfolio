import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, TextInput } from 'react-native'

const imgs = {
  search: require('./img/search.png')
}

type Props = {}
export default class Home extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      categories: ['Abstract', 'Animals', 'Film', 'Landscape'],
      posts: [
        {
          image: 'https://source.unsplash.com/random',
          caption: 'Fall Afternoon'
        },
        {
          image: 'https://source.unsplash.com/random',
          caption: 'Cape Coast'
        }
      ]
    }
  }

  onPressCategory = category => {}
  
  onPressPost = post => {}

  renderCategory = category => {
    return (
      <TouchableOpacity style={styles.categoryContainer} onPress={() => this.onPressCategory(category.item)}>
        <Text style={styles.category}>{category.item.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  renderPost = post => {
    return (
      <View style={styles.postContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={() => this.onPressPost(post.item)}>
          <Image style={styles.image} source={{ uri: post.item.image }} />
        </TouchableOpacity>
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>{post.item.caption}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.waterfall}>WATERFALL</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={imgs.search} />
          <TextInput placeholder="Search" placeholderTextColor="#8E8E93" style={styles.input} />
        </View>
        <FlatList
          contentContainerStyle={styles.categoriesList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.state.categories}
          renderItem={item => this.renderCategory(item)}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.postsList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          data={this.state.posts}
          renderItem={item => this.renderPost(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 25,
    paddingTop: 50
  },
  waterfall: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 2
  },
  inputContainer: {
    alignSelf: 'center',
    backgroundColor: '#2C2C2D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    marginTop: 20
  },
  input: {
    flex: 1,
    color: 'white',
    paddingLeft: 10
  },
  categoriesList: {
    marginTop: 10,
    padding: 10
  },
  categoryContainer: {
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4DB0E4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  category: {
    color: '#4DB0E4',
    padding: 20,
    fontSize: 10,
    fontWeight: '700'
  },
  postsList: {
    marginTop: 10,
    width: '95%',
    alignSelf: 'center'
  },
  postContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 370,
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 5
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '85%',
    height: '85%',
    borderRadius: 10
  },
  captionContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 5
  },
  caption: {
    padding: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  }
})

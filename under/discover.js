import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, FlatList } from 'react-native'

const imgs = {
  menu: require('./img/menu.png')
}
type Props = {}
export default class Discover extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      categories: ['Arts', 'Comedy', 'Drama', 'Education', 'Food', 'Rap', 'Sports', 'War'],
      stories: [
        {
          title: 'How I Learned to Accept The Sad Parts of Me',
          time: '10m',
          author: 'Michelle Right',
          image: 'https://source.unsplash.com/random'
        },
        {
          title: 'Living on The Sea Was My Best and Worst Mistake',
          time: '45m',
          author: 'Brad Livingston',
          image: 'https://source.unsplash.com/random'
        },
        {
          title: 'Will The Rainforest Ever Forgive Us?',
          time: '50m',
          author: 'Melissa Twins',
          image: 'https://source.unsplash.com/random'
        },
        {
          title: 'Freedom Found Me Inside of a Coffee Shop',
          time: '1h',
          author: 'Franklin Arthur',
          image: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressMenu = () => {}

  onPressCategory = category => {}

  renderCategory = category => {
    return (
      <TouchableOpacity style={styles.categoryContainer} onPress={() => this.onPressCategory(category.item)}>
        <Text style={styles.category}>{category.item.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  onPressStory = story => {}

  renderStory = story => {
    return (
      <View style={styles.storyContainer}>
        <TouchableOpacity onPress={() => this.onPressStory(story.item)} style={styles.imageContainer}>
          <View style={styles.base} />
          <Image style={styles.image} source={{ uri: story.item.image }} />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{story.item.title}</Text>
          <Text style={styles.author}>{story.item.author}</Text>
          <Text style={styles.time}>{story.item.time}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => this.onPressMenu()}>
              <Image source={imgs.menu} />
            </TouchableOpacity>
            <Text style={styles.header}>DISCOVER</Text>
            <View />
          </View>
          <TextInput style={styles.input} placeholder="Search pages or @username" />
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
            keyExtractor={(item, index) => JSON.stringify(index)}
            style={styles.storiesList}
            data={this.state.stories}
            renderItem={item => this.renderStory(item)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  mainContainer: {
    alignItems: 'center'
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '700'
  },
  categoriesList: {
    margin: 15
  },
  categoryContainer: {
    borderRadius: 2,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category: {
    padding: 20,
    color: '#A4A4A4',
    fontSize: 10,
    fontWeight: '700'
  },
  input: {
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#D3D3D3',
    borderBottomWidth: 2,
    paddingBottom: 10
  },
  storiesList: {
    alignSelf: 'stretch',
    padding: 20
  },
  storyContainer: {
    flexDirection: 'row',
    marginBottom: 60
  },
  imageContainer: {
    width: 140,
    height: 140,
    backgroundColor: 'lightgray',
    borderRadius: 5
  },
  base: {
    backgroundColor: '#FFD90E',
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  image: {
    position: 'absolute',
    top: 25,
    left: 25,
    width: '100%',
    height: '100%',
    borderRadius: 3
  },
  infoContainer: {
    paddingTop: 40,
    paddingBottom: 40,
    marginLeft: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  title: {
    color: '#4A4A4A',
    fontWeight: '600',
    width: '50%'
  },
  author: {
    color: '#4A4A4A',
    fontSize: 12,
    fontWeight: '100',
    width: '75%'
  },
  time: {
    color: '#4A4A4A',
    fontSize: 10,
    fontWeight: '500',
    width: '75%'
  }
})

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from 'react-native'

const imgs = {
  comments: require('./img/comments.png'),
  fav: require('./img/fav.png')
}
type Props = {}
export default class Discover extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      business: 'https://source.unsplash.com/random',
      entertainment: 'https://source.unsplash.com/random',
      geography: 'https://source.unsplash.com/random',
      sports: 'https://source.unsplash.com/random',
      featured: [
        {
          image: 'https://source.unsplash.com/random',
          category: 'Entertainment',
          title: 'Broadway is expanding across the world',
          favs: 20,
          comments: 100
        },
        {
          image: 'https://source.unsplash.com/random',
          category: 'Business',
          title: 'How three mothers built an at home lemonade company',
          favs: 50,
          comments: 75
        },
        {
          image: 'https://source.unsplash.com/random',
          category: 'Business',
          title: 'Investment tips for your penny portfolio',
          favs: 130,
          comments: 5
        }
      ]
    }
  }

  onPressArticle = article => {}

  onPressComments = article => {}

  onPressFav = article => {}

  onPressCategory = category => {}

  renderFeatured = article => {
    return (
      <TouchableOpacity style={styles.articleContainer} onPress={() => this.onPressArticle(article.item)}>
        <Image style={styles.image} source={{ uri: article.item.image }} />
        <Text style={styles.articleCategory}>{article.item.category.toUpperCase()}</Text>
        <Text style={styles.title}>{article.item.title}</Text>
        <View style={styles.favsContainer}>
          <TouchableOpacity onPress={() => this.onPressFav(article.item)}>
            <Image style={styles.fav} source={imgs.fav} />
          </TouchableOpacity>
          <Text>{article.item.favs}</Text>
          <TouchableOpacity onPress={() => this.onPressComments(article.item)}>
            <Image style={styles.fav} source={imgs.comments} />
          </TouchableOpacity>
          <Text>{article.item.comments}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.subHeader}>FEATURED</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.featuredList}
          renderItem={item => this.renderFeatured(item)}
          data={this.state.featured}
        />
        <Text style={styles.subHeader}>CATEGORIES</Text>
        <TouchableOpacity onPress={() => this.onPressCategory('business')}>
          <ImageBackground style={styles.categoryContainer} source={{ uri: this.state.business }}>
            <View style={[styles.tint, { backgroundColor: 'red' }]} />
            <Text style={styles.category}>BUSINESS</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressCategory('entertainment')}>
          <ImageBackground style={styles.categoryContainer} source={{ uri: this.state.entertainment }}>
            <View style={[styles.tint, { backgroundColor: 'yellow' }]} />
            <Text style={styles.category}>ENTERTAINMENT</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressCategory('geography')}>
          <ImageBackground style={styles.categoryContainer} source={{ uri: this.state.geography }}>
            <View style={[styles.tint, { backgroundColor: 'purple' }]} />
            <Text style={styles.category}>GEOGRAPHY</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressCategory('sports')}>
          <ImageBackground style={styles.categoryContainer} source={{ uri: this.state.sports }}>
            <View style={[styles.tint, { backgroundColor: 'green' }]} />
            <Text style={styles.category}>SPORTS</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  headerContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  subHeader: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: 15,
    fontWeight: '200'
  },
  featuredList: {},
  categoryContainer: {
    marginBottom: 20,
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tint: {
    position: 'absolute',
    opacity: 0.2,
    width: '100%',
    height: '100%'
  },
  category: {
    color: 'white',
    fontSize: 35,
    fontWeight: '800'
  },
  featuredContainer: {
    marginRight: 15
  },
  image: {
    width: 200,
    height: 120,
    backgroundColor: 'lightgray'
  },
  articleCategory: {
    marginTop: 10,
    color: '#888888',
    fontSize: 10,
    fontWeight: '800'
  },
  title: {
    width: 200,
    color: 'black',
    fontSize: 13,
    fontWeight: '700'
  },
  fav: {
    width: 15,
    height: 15
  },
  favsContainer: {
    marginTop: 10,
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

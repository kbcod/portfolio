import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from 'react-native'

const imgs = {
  search: require('./img/search.png'),
  alerts: require('./img/alerts.png')
}
type Props = {}
export default class Home extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      category: 'BUSINESS',
      avatar: 'https://source.unsplash.com/random',
      categories: ['BUSINESS', 'ENTERTAINMENT'],
      articles: {
        BUSINESS: [
          {
            cover: 'https://picsum.photos/300/300',
            title: 'Why Oil Companies Are Investing in Rainforests',
            date: '10/13',
            author: 'Vincent Black'
          },
          {
            cover: 'https://picsum.photos/300/300',
            title: 'The Operating Costs of Owning a Circus',
            date: '10/12',
            author: 'Amy Wilson'
          }
        ],
        ENTERTAINMENT: [
          {
            cover: 'https://picsum.photos/300/300',
            title: 'Guess Who Bought A $5 Million House',
            date: '10/15',
            author: 'Starson Mac'
          },
          {
            cover: 'https://picsum.photos/300/300',
            title: '10 Rooms Sold At The Box Office',
            date: '10/10',
            author: 'Fernando Price'
          },
          {
            cover: 'https://picsum.photos/300/300',
            title: 'New Clothing Brand New Stores',
            date: '10/02',
            author: 'Garryson Namina'
          }
        ]
      }
    }
  }

  onPressAvatar = () => {}

  onPressSearch = () => {}

  onPressAlerts = () => {}

  onPressCategory = category => {
    this.setState({ category })
  }

  onPressArticle = article => {}

  renderCategory = category => {
    return (
      <TouchableOpacity style={styles.categoryContainer} onPress={() => this.onPressCategory(category.item)}>
        <Text style={this.state.category != category.item ? styles.category : styles.categoryActive}>
          {category.item}
        </Text>
      </TouchableOpacity>
    )
  }

  renderArticle = article => {
    return (
      <TouchableOpacity style={styles.articleContainer} onPress={() => this.onPressArticle(article.item)}>
        <ImageBackground style={styles.cover} source={{ uri: article.item.cover }}>
          <Text style={styles.title}>{article.item.title}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detail}>{article.item.date}</Text>
            <View style={styles.seperator} />
            <Text style={styles.detail}>{article.item.author}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressAvatar()} style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: this.state.avatar }} />
          </TouchableOpacity>
          <Text style={styles.header}>TICK</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => this.onPressSearch()}>
              <Image source={imgs.search} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPressAlerts()}>
              <Image source={imgs.alerts} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          contentContainerStyle={styles.categoriesList}
          renderItem={item => this.renderCategory(item)}
          data={this.state.categories}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          contentContainerStyle={styles.articlesList}
          renderItem={item => this.renderArticle(item)}
          data={this.state.articles[this.state.category]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  headerContainer: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  header: {
    color: '#4F4F4F',
    fontSize: 25,
    fontWeight: '800'
  },
  buttonsContainer: {
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoriesList: {
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  categoryContainer: {
    marginRight: 10
  },
  category: {
    color: '#E6E6E6',
    fontSize: 30,
    fontWeight: '800'
  },
  categoryActive: {
    color: '#4F4F4F',
    fontSize: 30,
    fontWeight: '800'
  },
  articlesList: {},
  cover: {
    flex: 1,
    height: 300,
    padding: 10,
    justifyContent: 'flex-end'
  },
  articleContainer: {
    marginLeft: 0,
    margin: 10
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800'
  },
  detailsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  seperator: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10
  },
  detail: {
    color: 'white',
    fontSize: 13,
    fontWeight: '200'
  }
})

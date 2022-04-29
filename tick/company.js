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
  back: require('./img/back.png'),
  comments: require('./img/comments.png'),
  fav: require('./img/fav.png')
}
type Props = {}
export default class Company extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: 'lewalsinc',
      readers: '1.5k',
      avatar: 'https://source.unsplash.com/random',
      company: 'Lew & Alison Inc',
      bio: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate',
      articles: [
        {
          image: 'https://source.unsplash.com/random',
          category: 'Sports',
          title: 'Action sports is coming back with a vengeance',
          favs: 5,
          comments: 45
        },
        {
          image: 'https://source.unsplash.com/random',
          category: 'Entertainment',
          title: 'Meet the downtown breakdancers painting the city with flavor',
          favs: 80,
          comments: 200
        }
      ]
    }
  }

  onPressAvatar = () => {}

  onPressFollow = () => {}

  onPressBack = () => {}

  onPressArticle = article => {}

  onPressComments = article => {}

  onPressFav = article => {}

  renderArticle = article => {
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
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.userContainer}>
            <TouchableOpacity onPress={() => this.onPressAvatar()} style={styles.avatarContainer}>
              <Image style={styles.avatar} source={{ uri: this.state.avatar }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPressFollow()} style={styles.followContainer}>
              <Text style={styles.follow}>FOLLOW</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.company}>{this.state.company}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detail}>@ {this.state.username}</Text>
            <View style={styles.seperator} />
            <Text style={styles.detail}>{this.state.readers} readers</Text>
          </View>
          <Text style={styles.bio}>{this.state.bio}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            style={styles.articlesList}
            renderItem={item => this.renderArticle(item)}
            data={this.state.articles}
          />
        </ScrollView>
      </View>
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
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  userContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  followContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41CF8D',
    width: 100,
    height: 30,
    borderRadius: 2
  },
  follow: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white'
  },
  company: {
    fontSize: 25,
    fontWeight: '200'
  },
  articlesList: { paddingBottom: 10 },

  category: {
    color: 'white',
    fontSize: 35,
    fontWeight: '800'
  },
  articleContainer: {
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: 170,
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
  },
  detailsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  seperator: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10
  },
  detail: {
    color: '#C1C1C1',
    fontSize: 13,
    fontWeight: '500'
  },
  bio: {
    marginTop: 10,
    marginBottom: 20,
    color: '#505050',
    fontSize: 13,
    fontWeight: '500'
  }
})

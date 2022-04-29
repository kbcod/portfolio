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
  FlatList
} from 'react-native'

const imgs = {
  like: require('./img/like.png'),
  menu: require('./img/menu.png')
}

const Dimensions = require('Dimensions')

type Props = {}
export default class Home extends Component<Props> {
  componentDidMount() {
    Animated.sequence([
      Animated.delay(0),
      Animated.timing(this._loading, {
        toValue: 0.92,
        duration: this.state.time,
        easing: Easing.inOut(Easing.ease)
      })
    ]).start()
  }

  constructor(props) {
    super(props)

    this._loading = new Animated.Value(0)

    this.state = {
      title: 'Midnight Lunar Timelapse',
      time: 5000,
      duration: '20:45',
      thumbnail: 'https://source.unsplash.com/random',
      category: '😱',
      categories: [
        {
          img: '😂',
          total: 50
        },
        {
          img: '😱',
          total: 120
        },
        {
          img: '🤮',
          total: 90
        },
        {
          img: '🤭',
          total: 20
        },
        {
          img: '🤬',
          total: 75
        },
        {
          img: '😔',
          total: 30
        },
        {
          img: '🤕',
          total: 100
        },
        {
          img: '🤓',
          total: 60
        },
        {
          img: '😈',
          total: 80
        },
        {
          img: '👻',
          total: 25
        },
        {
          img: '🧠',
          total: 70
        },
        {
          img: '💄',
          total: 140
        },
        {
          img: '🐶',
          total: 120
        },
        {
          img: '🌦',
          total: 110
        },
        {
          img: '🍩',
          total: 40
        },
        {
          img: '🏀',
          total: 80
        }
      ]
    }
  }

  onPressMenu = () => {}

  onPressLike = () => {}

  onPressCategory = category => {
    this.setState({ category })
  }

  renderCategory = category => {
    return (
      <TouchableOpacity
        onPress={() => this.onPressCategory(category.item.img)}
        style={[
          styles.categoryContainer,
          this.state.category == category.item.img ? { borderColor: 'red', borderWidth: 2 } : null
        ]}>
        <Text style={styles.category}>{category.item.img}</Text>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>{category.item.total}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const loading = {
      width: Animated.multiply(this._loading, Dimensions.get('window').width),
      backgroundColor: '#FF0000',
      height: 4
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressMenu()} style={styles.menu}>
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
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{ uri: this.state.thumbnail }} />
        </View>
        <View style={styles.loadingContainer}>
          <Animated.View style={loading} />
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={() => this.onPressLike()} style={styles.likeContainer}>
            <Image source={imgs.like} />
          </TouchableOpacity>
          <Text style={styles.thumbnailTitle}>{this.state.title}</Text>
          <Text style={styles.time}>{this.state.duration}</Text>
        </View>
        <FlatList
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          numColumns={4}
          contentContainerStyle={styles.categoriesList}
          data={this.state.categories}
          renderItem={item => this.renderCategory(item)}
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menu: {},
  titleContainer: { paddingRight: '25%', bottom: 20 },
  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    left: 0
  },
  thumbnailContainer: {
    marginTop: 20,
    width: '100%',
    height: '45%',
    backgroundColor: '#101010'
  },
  thumbnail: {
    width: '100%',
    height: '100%'
  },
  loadingContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 4
  },
  infoContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnailTitle: {
    color: 'white'
  },
  time: {
    color: '#686868'
  },
  categoriesList: {
    marginTop: 10,
    alignItems: 'center'
  },
  categoryContainer: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  category: {
    fontSize: 20
  },
  totalContainer: {
    position: 'absolute',
    backgroundColor: '#00DAFF',
    bottom: 0,
    left: 0,
    width: '35%',
    height: '28%',
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  total: {
    color: 'white',
    fontSize: 10,
    fontWeight: '800'
  }
})

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from 'react-native'

const imgs = {
  upload: require('./img/upload.png'),
  favs: require('./img/favs.png'),
  search: require('./img/search.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

type Props = {}
export default class Home extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      categories: [
        {
          title: 'Comedy',
          preview: 'https://source.unsplash.com/random'
        },
        {
          title: 'Disaster',
          preview: 'https://source.unsplash.com/random'
        },
        {
          title: 'Explosion',
          preview: 'https://source.unsplash.com/random'
        },
        {
          title: 'Freaks',
          preview: 'https://source.unsplash.com/random'
        },
        {
          title: 'Hyper',
          preview: 'https://source.unsplash.com/random'
        },
        {
          title: 'Movie',
          preview: 'https://source.unsplash.com/random'
        },
        {
          title: 'Nature',
          preview: 'https://source.unsplash.com/random'
        },
        {
          title: 'Turnt',
          preview: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressUpload = () => {}

  onPressFavs = () => {}

  onPressSearch = () => {}

  onPressCategory = category => {}

  renderCategory = category => {
    return (
      <TouchableOpacity onPress={() => this.onPressCategory(category.item)} style={styles.categoryContainer}>
        <Image source={{ uri: category.item.preview }} style={styles.preview} />
        <View style={styles.tint} />
        <Text style={styles.title}>{category.item.title.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  render() {
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
            <TouchableOpacity onPress={() => this.onPressSearch()}>
              <Image source={imgs.search} style={styles.button} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    padding: 15
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    marginLeft: 10
  },
  categoriesList: {
    justifyContent: 'space-between'
  },
  categoryContainer: {
    width: WIDTH * 0.45,
    height: WIDTH * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  preview: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  tint: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 5
  }
})

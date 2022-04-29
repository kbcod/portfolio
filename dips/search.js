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
  FlatList,
  TextInput
} from 'react-native'

const imgs = {
  like: require('./img/like.png'),
  menu: require('./img/menu.png')
}

type Props = {}
export default class Search extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      tags: ['Action', 'Beauty', 'Comedy', 'Danger', 'Drama', 'Fighting', 'Hangover', 'Pets', 'Wrestling'],
      results: [
        {
          title: 'Late Night Diner',
          time: 5000,
          duration: '2:30',
          preview: 'https://source.unsplash.com/random'
        },

        {
          title: 'Mr.Tash’s Shop',
          time: 7000,
          duration: '1:45',
          preview: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressMenu = () => {}

  onPressLike = () => {}

  onPressTag = tag => {}

  onPressVideo = video => {}

  renderTag = tag => {
    return (
      <TouchableOpacity style={styles.tagContainer} onPress={() => this.onPressTag(tag.item)}>
        <Text style={styles.tag}>{tag.item}</Text>
      </TouchableOpacity>
    )
  }

  renderResult = result => {
    return (
      <View style={styles.resultContainer}>
        <TouchableOpacity onPress={() => this.onPressVideo(result.item)} style={styles.vidContainer}>
          <Image style={styles.vid} source={{ uri: result.item.preview }} />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={() => this.onPressLike()} style={styles.likeContainer}>
            <Image source={imgs.like} />
          </TouchableOpacity>
          <Text style={styles.vidTitle}>{result.item.title}</Text>
          <Text style={styles.time}>{result.item.duration}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressMenu()}>
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

        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" placeholderTextColor="white" style={styles.search} />
          <View style={styles.seperator} />
        </View>

        <FlatList
          contentContainerStyle={styles.tagsList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          data={this.state.tags}
          renderItem={item => this.renderTag(item)}
        />
        <View style={styles.break} />
        <FlatList
          contentContainerStyle={styles.resultsList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          data={this.state.results}
          renderItem={item => this.renderResult(item)}
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
  titleContainer: {
    paddingRight: '25%',
    bottom: 20
  },
  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    left: 0
  },
  searchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
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
  tagsList: {},
  tagContainer: {
    borderRadius: 4,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 0,
    marginRight: 15,
    marginLeft: 0,
    marginBottom: 10
  },
  tag: {
    color: 'white',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  break: {
    marginTop: 10
  },
  resultsList: {
    paddingTop: 10
  },
  resultContainer: {
    flex: 1,
    marginBottom: 20
  },
  vidContainer: {
    backgroundColor: '#101010'
  },
  vid: {
    height: 250,
    width: '100%'
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
  vidTitle: {
    color: 'white'
  },
  time: {
    color: '#686868'
  }
})

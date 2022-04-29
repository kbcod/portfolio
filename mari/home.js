import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'

type Props = {}
export default class Home extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      featured: [
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        }
      ],
      library: [
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        },
        {
          cover: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onChangeText = text => {}

  onPressBook = book => {}

  renderBook = book => {
    return (
      <TouchableOpacity style={styles.bookContainer} onPress={() => this.onPressBook(book.item)}>
        <Image style={styles.book} source={{ uri: book.item.cover }} />
      </TouchableOpacity>
    )
  }

  renderFeatured = book => {
    return (
      <TouchableOpacity style={styles.featuredContainer} onPress={() => this.onPressBook(book.item)}>
        <Image style={styles.featured} source={{ uri: book.item.cover }} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref="input"
            onChangeText={text => this.onChangeText(text)}
            placeholderTextColor="#DCDCDC"
            placeholder="Search author or book or IBSM"
          />
        </View>
        <View style={[styles.booksContainer, { marginTop: 15 }]}>
          <Text style={styles.subHeader}>FEATURED</Text>
          <View style={styles.shelfContainer}>
            <View style={styles.shelfTop} />
            <View style={styles.shelfBottom} />
          </View>
          <FlatList
            keyExtractor={(item, index) => JSON.stringify(index)}
            style={styles.booksList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.featured}
            renderItem={item => this.renderFeatured(item)}
          />
        </View>
        <View style={styles.booksContainer}>
          <Text style={styles.subHeader}>LIBRARY</Text>
          <View style={styles.shelfContainer}>
            <View style={styles.shelfTop} />
            <View style={styles.shelfBottom} />
          </View>
          <FlatList
            keyExtractor={(item, index) => JSON.stringify(index)}
            style={styles.booksList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.library}
            renderItem={item => this.renderBook(item)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  inputContainer: {
    marginTop: 30,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  input: {
    fontSize: 11,
    fontWeight: '200'
  },
  booksContainer: {
    marginTop: 50,
    justifyContent: 'space-between'
  },
  booksList: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30
  },
  bookContainer: {
    marginRight: 30
  },
  book: {
    width: 110,
    height: 130
  },
  featuredContainer: {
    marginRight: 30
  },
  featured: {
    width: 180,
    height: 220
  },
  subHeader: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '800',
    color: '#E7E7E7'
  },
  shelfContainer: {
    width: '100%',
    position: 'absolute',
    bottom: -20,
    left: 0
  },
  shelfTop: {
    width: '100%',
    borderBottomWidth: 30,
    borderBottomColor: '#DEDEDE',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
  },
  shelfBottom: {
    width: '100%',
    backgroundColor: 'white',
    height: 20,
    shadowColor: '#F2F2F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8
  }
})

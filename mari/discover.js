import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'

type Props = {}
export default class Discover extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      promo: {
        cover: 'https://source.unsplash.com/random'
      },
      featured: [
        {
          title: 'Right of Passage',
          author: 'Martha Cole',
          cover: 'https://source.unsplash.com/random'
        },
        {
          title: 'Weeping Winds',
          author: 'Patricia Kim',
          cover: 'https://source.unsplash.com/random'
        },
        {
          title: 'Nobody is Me',
          author: 'Douglas Pincher',
          cover: 'https://source.unsplash.com/random'
        }
      ],
      lists: [
        {
          background: '#FF5252',
          title: 'CLOWN STORIES'
        },
        {
          background: '#4B90FF',
          title: 'ROMANCES'
        }
      ]
    }
  }

  onChangeText = text => {}

  onPressPromo = () => {}

  onPressBook = book => {}

  renderBook = book => {
    return (
      <TouchableOpacity style={styles.bookContainer} onPress={() => this.onPressBook(book.item)}>
        <Image style={styles.book} source={{ uri: book.item.cover }} />
        <Text style={styles.title}>{book.item.title}</Text>
        <Text style={styles.author}>{book.item.author}</Text>
      </TouchableOpacity>
    )
  }

  renderList = list => {
    return (
      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.item.background }]}
        onPress={() => this.onPressBook(list.item)}>
        <Text style={styles.list}>{list.item.title}</Text>
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
        <TouchableOpacity onPress={() => this.onPressPromo()} style={styles.promoContainer}>
          <Image style={styles.promo} source={{ uri: this.state.promo.cover }} />
        </TouchableOpacity>
        <View style={styles.booksContainer}>
          <Text style={styles.subHeader}>FEATURED</Text>
          <FlatList
            keyExtractor={(item, index) => JSON.stringify(index)}
            style={styles.booksList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.featured}
            renderItem={item => this.renderBook(item)}
          />
        </View>
        <Text style={styles.subHeader}>LISTS</Text>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.listList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.state.lists}
          renderItem={item => this.renderList(item)}
        />
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
  promoContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  promo: {
    marginTop: 40,
    width: '100%',
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 4
  },
  booksContainer: {
    marginTop: 20,
    justifyContent: 'space-between'
  },
  booksList: {
    paddingTop: 10,
    paddingBottom: 10
  },
  bookContainer: {
    marginRight: 15
  },
  book: {
    width: 120,
    height: 160,
    borderRadius: 2,
    backgroundColor: 'lightgray'
  },
  author: {
    color: '#C1C1C1',
    fontSize: 10,
    fontWeight: '100'
  },
  title: {
    color: '#3E3E3E',
    fontSize: 12,
    fontWeight: '400'
  },
  subHeader: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '800',
    color: '#E7E7E7'
  },
  listContainer: {
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
    marginTop: 10
  },
  list: {
    color: 'white',
    fontSize: 13,
    fontWeight: '800'
  },
  listList: {
    flex: 1,
    width: '100%'
  }
})

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'

type Props = {}
export default class Search extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      search: [
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
        },
        {
          title: 'Time Starts',
          author: 'Seniau Galow',
          cover: 'https://source.unsplash.com/random'
        },
        {
          title: 'Simply Simon Says',
          author: 'Wanda Bedarea',
          cover: 'https://source.unsplash.com/random'
        },
        {
          title: 'Flee',
          author: 'Wanda Pinson',
          cover: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onChangeText = text => {}

  onPressBook = book => {}

  renderBook = book => {
    return (
      <View style={styles.bookContainer}>
        <TouchableOpacity onPress={() => this.onPressBook(book.item)}>
          <Image style={styles.book} source={{ uri: book.item.cover }} />
        </TouchableOpacity>
        <Text style={styles.title}>{book.item.title}</Text>
        <Text style={styles.author}>{book.item.author}</Text>
      </View>
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
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={styles.booksList}
          data={this.state.search}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={(item, index) => this.renderBook(item)}
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
  booksContainer: {
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  booksList: {
    alignSelf: 'center',
    width: '100%',
    marginTop: 20
  },
  bookContainer: {
    marginRight: 15,
    width: '47%',
    marginBottom: 15
  },
  book: {
    height: 250,
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
    fontWeight: '400',
    marginTop: 10
  }
})

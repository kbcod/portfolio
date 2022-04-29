import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, FlatList, Text, TextInput } from 'react-native'

const imgs = {
  save: require('./img/presetSave.png')
}

const Dimensions = require('Dimensions')

export default class Create extends Component<{}> {
  componentDidMount() {}

  constructor(props) {
    super(props)

    this.state = {
      selected: [],
      library: [
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        },
        {
          photo: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressPhoto = idx => {
    if (this.state.selected.includes(idx)) {
      var selected = this.state.selected
      delete selected[selected.indexOf(idx)]
      this.setState({ selected })
    } else {
      var selected = this.state.selected
      selected.push(idx)
      this.setState({ selected })
    }
  }

  onPressSave = () => {}

  renderPhoto = photo => {
    return (
      <TouchableOpacity
        style={[styles.photoContainer, this.state.selected.includes(photo.index) ? styles.select : null]}
        onPress={item => this.onPressPhoto(photo.index)}>
        <Image source={{ uri: photo.item.photo }} style={styles.photo} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="ENTER TITLE" placeholderTextColor={'#787878'} style={styles.titleInput} />
        <FlatList
          numColumns={2}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.photosList}
          renderItem={item => this.renderPhoto(item)}
          data={this.state.library}
        />
        <TouchableOpacity style={styles.saveContainer} onPress={item => this.onPressSave()}>
          <Image source={imgs.save} />
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  photosList: { flex: 1 },
  titleInput: {
    backgroundColor: '#2B2B2B',
    height: 70,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: 'white'
  },
  photoContainer: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#2B2B2B'
  },
  photo: {
    width: '100%',
    height: '100%'
  },
  select: {
    borderColor: 'white',
    borderWidth: 4
  },
  saveContainer: {
    margin: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderColor: 'white',
    borderWidth: 3
  }
})

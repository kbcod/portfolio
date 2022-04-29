import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, FlatList, Text, Animated, Easing } from 'react-native'

const imgs = {
  add: require('./img/add.png'),
  collections: require('./img/collections.png'),
  edit: require('./img/edit.png'),
  info: require('./img/info.png'),
  save: require('./img/save.png'),
  delete: require('./img/delete.png'),
  close: require('./img/infoClose.png')
}

const Dimensions = require('Dimensions')

export default class Home extends Component<{}> {
  componentDidMount() {}

  constructor(props) {
    super(props)

    this._infoSlide = new Animated.Value(-Dimensions.get('window').width)

    this.state = {
      info: false,
      time: 500,
      created: 'JAN 2018 03:30',
      uploaded: 'FEB 2018 12:45',
      edits: 20,
      size: '1.2 MB',
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

  onPressPhoto = select => {
    if (select == this.state.select) {
      this.setState({ select: -1 })
    } else {
      this.setState({ select })
    }
  }

  onPressDelete = idx => {}

  onPressAdd = () => {}

  onPressCollections = () => {}

  onPressEdit = () => {}

  onPressInfo = () => {
    Animated.sequence([
      Animated.delay(0),
      Animated.timing(this._infoSlide, {
        toValue: 0,
        duration: this.state.time,
        easing: Easing.inOut(Easing.ease)
      })
    ]).start()
  }

  onPressClose = () => {
    Animated.sequence([
      Animated.delay(0),
      Animated.timing(this._infoSlide, {
        toValue: -Dimensions.get('window').width,
        duration: this.state.time,
        easing: Easing.inOut(Easing.ease)
      })
    ]).start()
  }

  onPressSave = () => {}

  renderPhoto = photo => {
    return (
      <TouchableOpacity
        style={[styles.photoContainer, this.state.select == photo.index ? styles.select : null]}
        onPress={item => this.onPressPhoto(photo.index)}>
        <Image source={{ uri: photo.item.photo }} style={styles.photo} />
        {this.state.select == photo.index ? (
          <TouchableOpacity onPress={() => this.onPressDelete(photo.index)} style={styles.deleteContainer}>
            <Image source={imgs.delete} style={styles.delete} />
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
    )
  }

  render() {
    const infoPos = {
      right: this._infoSlide
    }

    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.photosList}
          renderItem={item => this.renderPhoto(item)}
          data={this.state.library}
        />
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={item => this.onPressEdit()}>
            <Image source={imgs.edit} />
          </TouchableOpacity>
          <TouchableOpacity onPress={item => this.onPressAdd()}>
            <Image source={imgs.add} />
          </TouchableOpacity>
          <TouchableOpacity onPress={item => this.onPressSave()}>
            <Image source={imgs.save} />
          </TouchableOpacity>
          <TouchableOpacity onPress={item => this.onPressCollections()}>
            <Image source={imgs.collections} />
          </TouchableOpacity>
          <TouchableOpacity onPress={item => this.onPressInfo()}>
            <Image source={imgs.info} />
          </TouchableOpacity>
        </View>
        <Animated.View style={[styles.infoContainer, infoPos]}>
          <TouchableOpacity style={styles.closeContainer} onPress={item => this.onPressClose()}>
            <Image source={imgs.close} />
          </TouchableOpacity>
          <Text style={styles.infoHeader}>CREATION DATE</Text>
          <Text style={styles.infoValue}>{this.state.created}</Text>
          <Text style={styles.infoHeader}>UPLOAD DATE</Text>
          <Text style={styles.infoValue}>{this.state.uploaded}</Text>
          <Text style={styles.infoHeader}>EDITS</Text>
          <Text style={styles.infoValue}>{this.state.edits}</Text>
          <Text style={styles.infoHeader}>SIZE</Text>
          <Text style={styles.infoValue}>{this.state.size}</Text>
        </Animated.View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  photosList: { flex: 1 },
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
    borderColor: 'red',
    borderWidth: 4
  },
  menuContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    width: '80%',
    height: 40,
    backgroundColor: 'white'
  },
  deleteContainer: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  infoContainer: {
    flex: 1,
    padding: 20,
    position: 'absolute',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height,
    backgroundColor: '#2B2B2B',
    shadowColor: 'black',
    shadowOffset: { width: -20, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  closeContainer: {
    alignSelf: 'flex-end'
  },
  infoHeader: {
    color: '#4D4D4D',
    fontSize: 18,
    marginTop: 40,
    marginBottom: 10,
    fontWeight: '700',
    letterSpacing: 0.3
  },
  infoValue: {
    color: 'white'
  }
})

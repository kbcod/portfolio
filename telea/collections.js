import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  TextInput,
  Animated,
  Easing
} from 'react-native'

const imgs = {
  new: require('./img/new.png'),
  remove: require('./img/remove.png'),
  close: require('./img/close.png'),
  add: require('./img/add.png'),
  collections: require('./img/collections.png'),
  edit: require('./img/edit.png'),
  info: require('./img/info.png'),
  save: require('./img/save.png')
}

const Dimensions = require('Dimensions')

export default class Collections extends Component<{}> {
  componentDidMount() {}

  constructor(props) {
    super(props)

    this._infoSlide = new Animated.Value(-Dimensions.get('window').width)

    this.state = {
      time: 500,
      created: 'JAN 2018 03:30',
      uploaded: 'FEB 2018 12:45',
      edits: 20,
      size: '1.2 MB',
      selected: [],
      collections: [
        {
          title: 'Sunday Evening',
          date: '2/1/18',
          photos: [
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
        },
        {
          title: 'Camp Trip',
          date: '1/25/18',
          photos: [
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
      ]
    }
  }

  onPressPhoto = photo => {}

  onPressNew = () => {}

  onPressRemove = collection => {}

  onPressCollection = collection => {}

  onPressAdd = () => {}

  onPressCollections = () => {}

  onPressEdit = () => {}

  onPressSave = () => {}


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

  renderPhoto = photo => {
    return (
      <TouchableOpacity style={styles.photoContainer} onPress={item => this.onPressPhoto(photo.item)}>
        <Image source={{ uri: photo.item.photo }} style={styles.photo} />
      </TouchableOpacity>
    )
  }

  renderCollection = collection => {
    return (
      <View style={styles.collectionContainer}>
        <View style={styles.collectionHeader}>
          <View style={styles.collectionTitleContainer}>
            <TouchableOpacity onPress={item => this.onPressRemove(collection.item)}>
              <Image source={imgs.remove} />
            </TouchableOpacity>
            <TouchableOpacity onPress={item => this.onPressCollection(collection.item)}>
              <Text style={styles.collectionTitle}>{collection.item.title.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.collectionDate}>{collection.item.date}</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.photosList}
          renderItem={item => this.renderPhoto(item)}
          data={collection.item.photos}
        />
      </View>
    )
  }

  render() {
    const infoPos = {
      right: this._infoSlide
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View />
          <Text style={styles.title}>COLLECTIONS</Text>
          <TouchableOpacity onPress={item => this.onPressNew()}>
            <Image source={imgs.new} />
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={1}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.collectionsList}
          renderItem={item => this.renderCollection(item)}
          data={this.state.collections}
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
  container: { flex: 1, backgroundColor: '#2B2B2B' },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
    height: 70
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20
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
  collectionsList: { flex: 1 },
  photosList: { marginTop: 20 },
  photoContainer: {
    width: 110,
    height: 110,
    backgroundColor: 'lightgray',
    marginRight: 20
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
  },
  collectionContainer: {
    padding: 10,
    marginBottom: 20
  },
  collectionHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  collectionTitleContainer: {
    flexDirection: 'row'
  },
  collectionTitle: {
    marginLeft: 10,
    color: 'white',
    fontWeight: '700',
    fontSize: 17
  },
  collectionDate: {
    color: '#666666',
    fontWeight: '600',
    fontSize: 15
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

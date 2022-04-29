import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Slider,
  TextInput
} from 'react-native'

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

const imgs = {
  new: require('./img/new.png'),
  mute: require('./img/mute.png'),
  campfire: require('./img/campfire.png'),
  drumroll: require('./img/drumroll.png'),
  explosion: require('./img/explosion.png'),
  helicopter: require('./img/helicopter.png'),
  iron: require('./img/iron.png'),
  keyboard: require('./img/keys.png'),
  ladybug: require('./img/ladybug.png'),
  leaves: require('./img/leaves.png'),
  mountains: require('./img/mountains.png'),
  plane: require('./img/plane.png'),
  rain: require('./img/rain.png'),
  storm: require('./img/storm.png'),
  train: require('./img/train.png'),
  vinyl: require('./img/vinyl.png'),
  wind: require('./img/wind.png')
}

type Props = {}

export default class New extends Component<Props> {
  constructor(props) {
    super(props)

    var sounds = imgs
    delete sounds.new
    delete sounds.mute

    this.state = {
      sounds: Object.keys(sounds),
      selected: [],
      backgrounds: [
        { color: '#DE1919' },
        { color: '#2BDCD3' },
        { color: '#2C1876' },
        { color: '#FFE303' },
        { color: '#22FF53' },
        { color: '#7B839A' }
      ]
    }
  }

  componentDidMount() {
    this.setState({ background: this.state.backgrounds[0].color })
  }

  onPressClose = () => {}

  onPressSound = sound => {
    if (this.state.selected.indexOf(sound) != -1) {
      var selected = this.state.selected
      delete selected[this.state.selected.indexOf(sound)]
      this.setState({ selected })
      return
    }

    var selected = this.state.selected
    selected.push(sound)
    this.setState({ selected })
  }

  onPressBackground = background => {
    this.setState({ background })
  }

  onPressSave = () => {}

  renderBackground = background => {
    return (
      <TouchableOpacity
        style={[styles.background, { backgroundColor: background.item.color }]}
        onPress={item => this.onPressBackground(background.item.color)}
      />
    )
  }

  renderSound = sound => {
    return (
      <View>
        <TouchableOpacity
          style={[styles.sound, this.state.selected.indexOf(sound.item) != -1 ? styles.selected : null]}
          onPress={() => this.onPressSound(sound.item)}>
          <Image source={imgs[sound.item]} style={styles.soundImage} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.background }]}>
        <TouchableOpacity style={styles.close} onPress={() => this.onPressClose()}>
          <Image source={imgs.new} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>NEW</Text>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.subHeader}>Title</Text>
          <TextInput
            placeholder="Enter a title"
            placeholderTextColor="white"
            textAlign="left"
            style={styles.input}
          />
          <View style={styles.line} />
          <Text style={styles.subHeader}>Background Color</Text>
          <FlatList
            horizontal={true}
            keyExtractor={(item, index) => JSON.stringify(index)}
            style={styles.backgroundList}
            renderItem={item => this.renderBackground(item)}
            data={this.state.backgrounds}
          />
          <Text style={styles.subHeader}>Sounds</Text>
          <FlatList
            scrollEnabled={false}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            numColumns={5}
            contentContainerStyle={styles.soundsList}
            data={this.state.sounds}
            renderItem={item => this.renderSound(item)}
          />

          <TouchableOpacity onPress={() => this.onPressSave()} style={styles.saveButtonContainer}>
            <Text style={[styles.save, { color: this.state.background }]}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7249CC',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center'
  },
  close: {
    alignSelf: 'flex-end',
    padding: 20,
    transform: [{ rotate: '45 deg' }]
  },
  subHeader: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 20
  },
  mainContainer: {
    paddingLeft: 20
  },
  input: { width: '90%', height: 40, color: 'white' },
  line: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    height: 1
  },
  backgroundList: { marginTop: 20 },
  background: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 3,
    marginRight: 10
  },
  soundsList: {
    marginTop: 20
  },
  sound: {
    margin: 25,
    marginLeft: 0,
    padding: 10
  },
  selected: {
    borderColor: 'white',
    borderWidth: 2
  },
  save: {
    height: 25,
    fontWeight: '800',
    fontSize: 15,
    color: 'black',
    textAlign: 'center'
  },
  saveButtonContainer: {
    width: '40%',
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 15,
    alignSelf: 'center',
    borderRadius: 5
  }
})

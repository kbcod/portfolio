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
  Slider
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
  keys: require('./img/keys.png'),
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

export default class Home extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      title: 'LUNCH BREAK',
      mute: false,
      boards: [
        {
          background: '#7249CC',
          title: 'WORK',
          sounds: [
            {
              sound: 'ladybug',
              vol: 0.4
            },
            {
              sound: 'rain',
              vol: 0.6
            },
            {
              sound: 'storm',
              vol: 0.9
            },
            {
              sound: 'wind',
              vol: 0.1
            },
            {
              sound: 'vinyl',
              vol: 0.25
            },
            {
              sound: 'leaves',
              vol: 0.3
            },
            {
              sound: 'mountains',
              vol: 0.6
            },
            {
              sound: 'train',
              vol: 0.9
            }
          ]
        },
        {
          background: '#DE1919',
          title: 'SCHOOL',
          sounds: [
            {
              sound: 'wind',
              vol: 0.9
            },
            {
              sound: 'helicopter',
              vol: 0.9
            },
            {
              sound: 'vinyl',
              vol: 0.9
            },
            {
              sound: 'plane',
              vol: 0.5
            },
            {
              sound: 'drumroll',
              vol: 0.5
            },
            {
              sound: 'keys',
              vol: 0.1
            }
          ]
        },
        {
          background: '#2BDCD3',
          title: 'TRAFFIC',
          sounds: [
            {
              sound: 'mountains',
              vol: 0.2
            },
            {
              sound: 'storm',
              vol: 0.7
            },
            {
              sound: 'campfire',
              vol: 0.1
            },
            {
              sound: 'ladybug',
              vol: 1.0
            },
            {
              sound: 'explosion',
              vol: 0.1
            },
            {
              sound: 'leaves',
              vol: 0.4
            }
          ]
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({ background: this.state.boards[0].background })
  }

  onPressNew = () => {}

  onPressSound = sound => {}

  onPressMute = () => {
    this.setState({ mute: !this.state.mute })
  }

  onPageChange = page => {}

  handleScroll = event => {
    var scrollX = event.nativeEvent.contentOffset.x
    var page = parseInt(scrollX / WIDTH + 0.5)

    if (this.state.page != page) {
      this.onPageChange(page)
    }
    this.setState({ page })
    this.setState({ background: this.state.boards[page].background })
  }

  renderSound = sound => {
    return (
      <View>
        <TouchableOpacity style={styles.sound} onPress={() => this.onPressSound(sound.item)}>
          <Image source={imgs[sound.item.sound]} style={styles.soundImage} />
        </TouchableOpacity>
        <Slider style={styles.slide} minimumTrackTintColor={'white'} value={sound.item.vol} />
      </View>
    )
  }

  renderBoards = () => {
    var boards = []
    for (var i = 0; i < this.state.boards.length; i++) {
      boards.push(
        <View key={this.state.boards[i].title}>
          <View style={styles.header}>
            <Text style={styles.title}>{this.state.boards[i].title}</Text>
          </View>
          <FlatList
            keyExtractor={(item, index) => JSON.stringify(index)}
            numColumns={2}
            contentContainerStyle={styles.soundsList}
            data={this.state.boards[i].sounds}
            renderItem={item => this.renderSound(item)}
          />
        </View>
      )
    }

    return boards
  }

  renderIndicators = () => {
    var pages = []
    for (var i = 0; i < this.state.boards.length; i++) {
      pages.push(<View key={i} style={i == this.state.page ? styles.activePage : styles.inactivePage} />)
    }
    return pages
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.background }]}>
        <TouchableOpacity style={styles.new} onPress={() => this.onPressNew()}>
          <Image source={imgs.new} />
        </TouchableOpacity>
        <ScrollView
          scrollEventThrottle={20}
          onScroll={this.handleScroll}
          showsHorizontalScrollIndicator={false}
          style={styles.mainContainer}
          pagingEnabled={true}
          horizontal={true}>
          {this.renderBoards()}
        </ScrollView>
        <View style={styles.controlsContainer}>{this.renderIndicators()}</View>
        <TouchableOpacity
          style={[styles.mute, this.state.mute == true ? { opacity: 0.2 } : { opacity: 1.0 }]}
          onPress={() => this.onPressMute()}>
          <Image source={imgs.mute} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  header: {
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center'
  },
  new: {
    alignSelf: 'flex-end',
    padding: 20
  },
  scroll: {
    flexDirection: 'row',
    backgroundColor: 'gray'
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 30
  },
  activePage: {
    width: 6,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
    margin: 5
  },
  inactivePage: {
    width: 6,
    height: 6,
    backgroundColor: 'rgba(1,1,1,0.2)',
    borderRadius: 3,
    margin: 5
  },
  soundsList: {
    marginTop: 20,
    width: WIDTH,
    alignItems: 'center'
  },
  mainContainer: {},
  sound: {
    width: WIDTH / 4,
    margin: 25,
    alignItems: 'center'
  },
  soundImage: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }]
  },
  slide: {
    transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }]
  },
  mute: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    margin: 30
  }
})

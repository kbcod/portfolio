import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  Image
} from 'react-native'

const imgs = {
  like: require('./img/like.png')
}

export default class Live extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      preview: 'https://source.unsplash.com/random',
      users: [
        { user: '0', avatar: 'https://picsum.photos/300/300' },
        { user: '1', avatar: 'https://picsum.photos/300/300' },
        { user: '2', avatar: 'https://picsum.photos/300/300' },
        { user: '3', avatar: 'https://picsum.photos/300/300' },
        { user: '4', avatar: 'https://picsum.photos/300/300' },
        { user: '5', avatar: 'https://picsum.photos/300/300' },
        { user: '6', avatar: 'https://picsum.photos/300/300' },
        { user: '7', avatar: 'https://picsum.photos/300/300' },
        { user: '8', avatar: 'https://picsum.photos/300/300' },
        { user: '9', avatar: 'https://picsum.photos/300/300' },
        { user: '10', avatar: 'https://picsum.photos/300/300' }
      ]
    }
  }

  onPressClose = () => {}

  onPressAvatar = user => {}

  onPressLike = () => {}

  renderUser = user => {
    return (
      <TouchableOpacity onPress={item => this.onPressAvatar(user.item)}>
        <Image source={{ uri: user.item.avatar }} style={styles.avatar} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: this.state.preview }} style={styles.streamContainer}>
          <TouchableOpacity style={styles.closeContainer} onPress={item => this.onPressClose()}>
            <Text style={styles.close}>CLOSE</Text>
          </TouchableOpacity>
          <View style={styles.audienceContainer}>
            <FlatList
              keyExtractor={(item, index) => JSON.stringify(index)}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.viewerList}
              renderItem={item => this.renderUser(item)}
              data={this.state.users}
            />
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Share your thoughts"
                placeholderTextColor="white"
                style={styles.input}
              />
              <View />
              <TouchableOpacity onPress={item => this.onPressLike()}>
                <Image style={styles.like} source={imgs.like} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', flex: 1, backgroundColor: 'black' },
  streamContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  closeContainer: {
    margin: 20,
    borderRadius: 3,
    backgroundColor: '#FF2500',
    width: 80,
    height: 30,
    paddingTop: 5
  },
  close: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '700'
  },
  audienceContainer: { padding: 20 },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between'
  },
  input: {
    flex: 0.95,
    height: 35,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    color: 'white'
  },
  like: { width: 35, height: 35 },
  avatar: { width: 35, height: 35, borderRadius: 17.5, marginRight: 15 }
})

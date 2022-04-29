import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native'

const imgs = {
  home: require('./img/home.png'),
  media: require('./img/media.png'),
  add: require('./img/add.png')
}

type Props = {}
export default class Upload extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {}
  }

  onPressHome = () => {}

  onPressMedia = () => {}

  onPressAdd = () => {}

  onPressPost = () => {}

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>UPLOAD</Text>
          <TouchableOpacity onPress={() => this.onPressHome()}>
            <Image source={imgs.home} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.mediaContainer} onPress={() => this.onPressMedia()}>
          <Image style={styles.content} source={imgs.media} />
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <Text style={styles.subHeader}>Title</Text>
          <TextInput
            placeholder="Enter a title"
            placeholderTextColor="white"
            textAlign="left"
            style={styles.input}
          />
          <Text style={styles.subHeader}>Tags</Text>
          <View style={styles.tagsContainer}>
            <TouchableOpacity onPress={() => this.onPressAdd()}>
              <Image style={styles.add} source={imgs.add} />
            </TouchableOpacity>
            <TextInput
              placeholder="Tag"
              placeholderTextColor="white"
              textAlign="left"
              style={styles.tagsInput}
            />
          </View>
          <TouchableOpacity onPress={() => this.onPressPost()} style={styles.postContainer}>
            <Text style={styles.post}>POST</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 5
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    paddingBottom: 0
  },
  mediaContainer: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10
  },
  subHeader: {
    color: '#5D5D5D',
    fontSize: 15,
    fontWeight: '100',
    marginTop: 10
  },
  mainContainer: {
    padding: 20
  },
  input: {
    padding: 10,
    height: 40,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 10
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  add: {
    width: 35,
    height: 35
  },
  tagsInput: {
    width: 100,
    padding: 10,
    height: 35,
    color: 'white',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  postContainer: {
    marginTop: 30,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  post: {
    textAlign: 'center',
    color: '#252525',
    fontWeight: '700',
    fontSize: 20
  }
})

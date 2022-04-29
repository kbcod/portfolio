import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

const imgs = {
  like: require('./img/like.png'),
  comment: require('./img/comment.png'),
  options: require('./img/options.png')
}
type Props = {}
export default class Pip extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      pip: 'Last time I went camping I went 3 days without food or water',
      location: 'Rome, Italty',
      image: 'https://source.unsplash.com/random',
      likes: 10,
      comments: 200,
      replies: [
        {
          username: 'palo',
          time: '5m',
          text: 'I went 50 days bro',
          color: '#FF0000'
        },
        {
          username: 'lena',
          time: '40m',
          text: 'Is this even possible?',
          color: '#0022FF'
        },
        {
          username: 'runa',
          time: '45m',
          text:
            'My cousin did the same thing. I was there and we barely survived the last night. Crazy story',
          color: '#8EFF21'
        }
      ]
    }
  }

  onChangeText = text => {
    this.setState({ text })
  }

  onSubmit = () => {
    this.refs.input.clear()
    var reply = {
      username: 'twino',
      time: '1h',
      text: this.state.text,
      color: '#EFFF00'
    }
    var replies = this.state.replies
    replies.push(reply)
    this.setState({ replies })
  }

  onPressOptions = pip => {}

  onPressLike = pip => {}

  onPressComment = pip => {}

  renderReply = reply => {
    return (
      <View
        style={[
          styles.replyContainer,
          reply.index == this.state.replies.length - 1 ? { borderBottomWidth: 0 } : null
        ]}>
        <View style={styles.replyTopContainer}>
          <View style={styles.userContainer}>
            <View style={[styles.color, { backgroundColor: reply.item.color }]} />
            <Text style={styles.user}>{reply.item.username}</Text>
          </View>
          <Text style={styles.time}>{reply.item.time}</Text>
        </View>
        <Text style={styles.replyText}>{reply.item.text}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: this.state.image }}
          blurRadius={10}
          style={[styles.pipContainer, this.state.bg ? { backgroundColor: this.state.bg } : null]}>
          <View style={styles.empty} />
          <View style={styles.bodyContainer}>
            <Text style={styles.pip}>{this.state.pip}</Text>
            <View style={styles.seperator} />
            <Text style={styles.location}>{this.state.location}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.optionsContainer}>
              <TouchableOpacity onPress={() => this.onPressOptions(this.state)}>
                <Image source={imgs.options} />
              </TouchableOpacity>
            </View>
            <View style={styles.likesContainer}>
              <TouchableOpacity onPress={() => this.onPressLike(this.state)}>
                <Image source={imgs.like} />
              </TouchableOpacity>
              <Text style={styles.count}>{this.state.likes}</Text>
              <TouchableOpacity onPress={() => this.onPressComment(this.state)}>
                <Image source={imgs.comment} />
              </TouchableOpacity>
              <Text style={styles.count}>{this.state.comments}</Text>
            </View>
          </View>
        </ImageBackground>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.repliesList}
          data={this.state.replies}
          renderItem={item => this.renderReply(item)}
        />
        <KeyboardAvoidingView behavior="position">
          <TextInput
            ref="input"
            onChangeText={text => this.onChangeText(text)}
            onSubmitEditing={() => this.onSubmit()}
            placeholderTextColor="#1E1F26"
            placeholder="Share your thoughts"
            style={styles.input}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292828'
  },
  headerContainer: {
    width: '100%',
    marginTop: 20,
    padding: 20,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  pipContainer: {
    height: WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  empty: {
    width: '100%',
    height: '10%'
  },
  bodyContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  pip: {
    width: '80%',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25
  },
  seperator: {
    width: '15%',
    height: 2,
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 15
  },
  location: {
    color: 'white',
    fontSize: 15,
    fontWeight: '100',
    textAlign: 'center'
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  likesContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  count: { fontSize: 15, fontWeight: '100', color: 'white' },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  input: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#090A12',
    color: 'white',
    height: 50
  },
  repliesList: {},
  replyContainer: {
    flexDirection: 'column',
    padding: 20,
    marginLeft: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  replyTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  replyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 10
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  user: {
    color: 'white',
    marginLeft: 10
  },
  color: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: 'white',
    borderWidth: 2
  },
  time: {
    color: 'white'
  }
})

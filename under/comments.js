import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  TextInput
} from 'react-native'

const imgs = {
  back: require('./img/back.png'),
  send: require('./img/send.png')
}

export default class Comments extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        {
          username: 'Rick Wisely',
          avatar: 'https://picsum.photos/300/300',
          text: 'Mauris accumsan dolor dui, at commodo massa fermentum quis',
          time: '35s'
        },
        {
          username: 'Kevin Lawrence',
          avatar: 'https://picsum.photos/300/300',
          text:
            'Morbi velit purus, aliquam ac laoreet et, auctor quis libero. Cras hendrerit massa nisl, eget pretium lorem imperdiet euismod',
          time: '1m'
        },
        {
          username: 'Timothy Soto',
          avatar: 'https://picsum.photos/300/300',
          text: 'Donec finibus ex justo, vel dignissim lectus sagittis eget',
          time: '5m'
        },
        {
          username: 'Jane Foster',
          avatar: 'https://picsum.photos/300/300',
          text: 'Aliquam dapibus lobortis dolor, porttitor interdum risus luctus',
          time: '25m'
        },
        {
          username: 'Kelly Adams',
          avatar: 'https://picsum.photos/300/300',
          text:
            'Proin elementum lobortis tortor, in tristique leo pulvinar sed. Aenean luctus tortor sapien, eu laoreet neque',
          time: '55m'
        }
      ]
    }
  }

  onPressBack = () => {}

  onPressSend = () => {
    Keyboard.dismiss()
    var comments = this.state.comments
    comments.push({
      username: 'Mithcel Randol',
      avatar: 'https://picsum.photos/300/300',
      text: this.state.text,
      time: '1 h'
    })
    this.setState({ comments })
    this.refs.input.clear()
  }

  onChangeText = text => {
    this.setState({ text })
  }

  onSubmit = () => {
    this.onPressSend()
  }

  renderComment = comment => {
    return (
      <View style={styles.commentContainer}>
        <View style={styles.userContainer}>
          <TouchableOpacity onPress={() => this.onPressUser(comment.item.uid)}>
            <Image style={styles.avatar} source={{ uri: comment.item.avatar }} />
          </TouchableOpacity>
          <Text style={styles.username}>{comment.item.username}</Text>
          <Text style={styles.time}>{comment.item.time}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.comment}>{comment.item.text}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
          <Text style={styles.comments}>COMMENTS</Text>
          <FlatList
            scrollEnabled={false}
            style={styles.commentsList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderComment(item)}
            data={this.state.comments}
            extraData={this.state}
          />
        </ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.inputContainer}>
            <TextInput
              ref="input"
              onChangeText={text => this.onChangeText(text)}
              onSubmitEditing={() => this.onSubmit()}
              placeholderTextColor="white"
              placeholder="Type a comment..."
              style={styles.input}
            />
            <TouchableOpacity style={styles.send} onPress={() => this.onPressSend()}>
              <Image source={imgs.send} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center'
  },
  backContainer: {
    position: 'absolute',
    top: 30,
    left: 15
  },
  commentsContainer: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  commentContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 15,
    padding: 10,
    marginRight: 10
  },
  comments: {
    marginTop: 15,
    textAlign: 'center',
    color: '#4A4A4A',
    fontSize: 30,
    fontWeight: '800'
  },
  commentsList: {
    paddingTop: 10,
    marginBottom: 10
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C2C2C2',
    marginRight: 15
  },
  bodyContainer: {
    marginTop: 20,
    flexDirection: 'column'
  },
  username: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: '100'
  },
  comment: {
    color: '#D3D3D3',
    fontWeight: '100',
    marginRight: 30
  },
  time: {
    color: '#D3D3D3',
    fontWeight: '100',
    position: 'absolute',
    right: 0
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: 70,
    width: '100%',
    backgroundColor: '#4A4A4A'
  },
  input: {
    width: '90%',
    color: 'white',
    opacity: 1,
    height: 50,
    paddingLeft: 40
  },
  send: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: '15%',
    height: '100%'
  }
})

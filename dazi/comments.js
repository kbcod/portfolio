import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TextInput
} from 'react-native'

const imgs = {
  back: require('./img/back.png')
}
export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        {
          uid: 4839201,
          username: 'Madison Price',
          avatar: 'https://picsum.photos/300/300',
          text: 'Vestibulum rutrum quam vitae fringilla tincidunt'
        },
        {
          uid: 345361,
          username: 'Diane Owens',
          avatar: 'https://picsum.photos/300/300',
          text: 'Nam porttitor blandit accumsan'
        },
        {
          uid: 987572,
          username: 'Brian Griffin',
          avatar: 'https://picsum.photos/300/300',
          text: 'Donec facilisis tortor ut augue lacinia, at viverra est'
        },
        {
          uid: 1182902,
          username: 'Lauren Mitchell',
          avatar: 'https://picsum.photos/300/300',
          text: 'Curabitur lobortis id lorem id bibendum'
        },
        {
          uid: 586992,
          username: 'Larry Mills',
          avatar: 'https://picsum.photos/300/300',
          text: 'Mauris non tempor quam, et lacinia sapien'
        },
        {
          uid: 8927119,
          username: 'Joshua Ray',
          avatar: 'https://picsum.photos/300/300',
          text: 'In hac habitasse platea dictumst'
        },
        {
          uid: 22839381,
          username: 'Jesse Wells',
          avatar: 'https://picsum.photos/300/300',
          text: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis'
        }
      ]
    }
  }

  onPressBack = () => {}

  onPressUser = user => {}

  onPressPost = () => {
    Keyboard.dismiss()
    var comments = this.state.comments
    comments.push({
      uid: 8761172,
      username: 'React Dev',
      time: '1s',
      text: this.state.text
    })
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
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(comment.item.uid)}>
          <Image style={styles.avatar} source={{ uri: comment.item.avatar }} />
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <Text style={styles.username}>{comment.item.username}</Text>
          <Text style={styles.body}>{comment.item.text}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backContainer} onPress={() => this.onPressBack()}>
            <Image style={styles.back} source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.header}>COMMENTS</Text>
          <View />
        </View>
        <FlatList
          style={styles.commentsList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={item => this.renderComment(item)}
          data={this.state.comments}
          extraData={this.state}
        />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.inputContainer}>
            <TextInput
              ref="input"
              onChangeText={text => this.onChangeText(text)}
              onSubmitEditing={() => this.onSubmit()}
              placeholderTextColor="#767676"
              placeholder="Add a comment..."
              style={styles.input}
            />
            <TouchableOpacity onPress={() => this.onPressPost()} style={styles.post}>
              <Text style={styles.button}>POST</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  header: { fontSize: 30, fontWeight: '700' },
  backContainer: {
    paddingLeft: 20
  },
  commentsList: {
    paddingTop: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C2C2C2'
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    marginRight: 10
  },
  bodyContainer: {
    flexDirection: 'column',
    marginLeft: 20
  },
  username: {
    color: '#CACACA',
    fontWeight: '700'
  },
  body: {
    fontWeight: '100',
    marginRight: 30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: 50,
    borderTopColor: '#B4B4B4',
    borderTopWidth: 1
  },
  input: {
    flex: 1,
    color: 'black',
    height: 50,
    paddingLeft: 30
  },
  post: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414141',
    padding: 10,
    right: 10,
    width: 80,
    borderRadius: 3
  },
  button: {
    color: 'white',
    fontSize: 12,
    fontWeight: '800'
  }
})

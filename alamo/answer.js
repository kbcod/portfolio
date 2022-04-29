import React, { Component } from 'react'
import { View, StyleSheet, Text, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native'

const imgs = {
  back: require('./img/back.png')
}

export default class Answer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      max: 200,
      question: 'When was the last time you went to a party?'
    }
  }

  onChangeText = text => {
    this.setState({ count: text.length })
  }

  onPressBack = () => {}

  onPressPost = () => {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.title}>Alamo</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.subHeader}>Question</Text>
          <Text style={styles.question}>{this.state.question}</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.subHeader}>Answer</Text>
          <TextInput
            ref="input"
            multiline={true}
            maxLength={this.state.max}
            onChangeText={text => this.onChangeText(text)}
            style={styles.answerInput}
          />
          <Text style={styles.characterCount}>
            {this.state.count}/{this.state.max}
          </Text>
        </View>
        <TouchableOpacity style={styles.postContainer} onPress={() => this.onPressPost()}>
          <Text ref="count" style={styles.post}>
            POST
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    width: '100%',
    color: '#4A90E2'
  },
  questionContainer: {
    marginTop: 20,
    height: 80,
    justifyContent: 'space-between'
  },
  subHeader: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '600',
    width: '100%',
    color: '#4F4F4F'
  },
  question: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '500',
    width: '100%',
    color: '#4F4F4F'
  },
  answerContainer: {
    width: '100%',
    marginTop: 20
  },
  answerInput: {
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: '60%',
    borderRadius: 5
  },
  question: {
    width: '85%',
    fontSize: 16,
    color: '#4A90E2'
  },
  characterCount: {
    marginTop: 10,
    alignSelf: 'flex-end',
    color: '#CECECE'
  },
  postContainer: {
    width: 215,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C92E6',
    borderRadius: 3
  },
  post: {
    color: 'white',
    fontWeight: '400'
  }
})

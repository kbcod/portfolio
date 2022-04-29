import React, { Component } from 'react'
import { View, StyleSheet, Text, Keyboard, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'

const imgs = {
  back: require('./img/back.png')
}

export default class Ask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      max: 200,
      users: [
        {
          name: 'Abriella Bond',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Sam Rockwell',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Gerard Butler',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Jeremy Martinez',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Hayden Christensen',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Tiffani Thiessen',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Linnea Berthelsen',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Saffron Burrows',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Lauren German',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Zoey Deutch',
          photo: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onChangeText = text => {
    this.setState({ count: text.length })
  }

  onPressBack = () => {}

  onPressAsk = () => {}

  onPressUser = user => {}

  renderUser = user => {
    return (
      <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(user.item)}>
        <Image style={styles.avatar} source={{ uri: user.item.photo }} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.title}>Question</Text>
        </View>
        <View style={styles.usersContainer}>
          <Text style={styles.subHeader}>Who would you like to ask</Text>
          <FlatList
            keyExtractor={(item,index) => JSON.stringify(index)}
            style={styles.usersList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            numColumns={1}
            data={this.state.users}
            renderItem={item => this.renderUser(item)}
          />
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.subHeader}>What is your question?</Text>
          <TextInput
            ref="input"
            multiline={true}
            maxLength={this.state.max}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => this.onChangeText(text)}
            style={styles.answerInput}
          />
          <Text style={styles.characterCount}>
            {this.state.count}/{this.state.max}
          </Text>
        </View>
        <TouchableOpacity style={styles.askContainer} onPress={() => this.onPressAsk()}>
          <Text ref="count" style={styles.ask}>
            ASK
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
  usersContainer: {
    marginTop: 20,
    height: 80,
    justifyContent: 'space-between'
  },
  usersList: {
    paddingTop: 10,
    paddingBottom: 10
  },
  avatarContainer: {
    width: 40,
    height: 40,
    marginRight: 30
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  subHeader: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '200',
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
  characterCount: {
    marginTop: 10,
    alignSelf: 'flex-end',
    color: '#CECECE'
  },
  askContainer: {
    width: 215,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C92E6',
    borderRadius: 3
  },
  ask: {
    color: 'white',
    fontWeight: '400'
  }
})

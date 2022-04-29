import React, { Component } from 'react'
import { View, StyleSheet, Text, Keyboard, TextInput, FlatList, TouchableOpacity } from 'react-native'
export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 10,
      asks: [
        {
          question: 'When was the last time you went to a party?',
          user: 'Melissa Wayer',
          time: '30m'
        },
        {
          question: 'How old were you when you bought your first car?',
          user: 'Melissa Wayer',
          time: '2h'
        },
        {
          question: 'Would you go out with anybody in your chemistry class?',
          user: 'Anon',
          time: '8h'
        },
        {
          question: 'What did you do after that costume party got shut down?',
          user: 'Juan Lewis',
          time: '8h'
        }
      ]
    }
  }

  onChangeText = text => {}

  onPressAsk = ask => {}

  renderAsk = ask => {
    return (
      <TouchableOpacity onPress={() => this.onPressAsk()}>
        <View style={styles.askContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.question}>{ask.item.question}</Text>
            <Text style={styles.time}>{ask.item.time}</Text>
          </View>
          <Text style={styles.user}>{ask.item.user}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Hi, Austin</Text>
        <Text style={styles.count}>{this.state.count} Questions</Text>
        <View style={styles.input}>
          <TextInput
            onChangeText={text => this.onChangeText(text)}
            placeholderTextColor="#DCDCDC"
            placeholder="Search friends"
          />
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          numColumns={1}
          style={styles.tasksList}
          data={this.state.asks}
          renderItem={item => this.renderAsk(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    padding: 20,
    flexDirection: 'column'
  },
  greeting: {
    width: 70,
    height: 15
  },
  count: {
    fontSize: 35,
    fontWeight: '500',
    marginTop: 10,
    width: '100%',
    color: '#4A90E2'
  },
  input: {
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholder: {
    fontSize: 10,
    color: '#DCDCDC',
    textAlign: 'center'
  },
  question: {
    width: '85%',
    fontSize: 16,
    color: '#4A90E2'
  },
  askContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 20,
    padding: 15
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    fontSize: 10,
    fontWeight: '500',
    color: '#C3C3C3'
  },
  user: {
    color: '#C3C3C3',
    marginTop: 15
  }
})

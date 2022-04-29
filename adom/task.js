import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'

export default class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          category: 'Travel',
          text: 'Book A Flight'
        },
        {
          category: 'Travel',
          text: 'Find An Attraction'
        },
        {
          category: 'Shopping',
          text: 'Order A Bag'
        },
        {
          category: 'Health',
          text: 'Dinner Recipe'
        },
        {
          category: 'School',
          text: 'Take Notes'
        },
        {
          category: 'Budget',
          text: 'Spending List'
        },
        {
          category: 'Shopping',
          text: 'Order Shoes'
        },
        {
          category: 'Fun',
          text: 'Find A Flight'
        }
      ]
    }
  }

  onPressTask = task => {}

  renderTask = task => {
    return (
      <TouchableOpacity onPress={() => this.onPressTask(task)}>
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>{task.item.category.toUpperCase()}</Text>
          <Text style={styles.taskDescription}>{task.item.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.last}>WHAT CAN I DO FOR YOU TODAY?</Text>
        <View style={styles.seperator} />
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          numColumns={2}
          style={styles.tasksList}
          data={this.state.tasks}
          renderItem={item => this.renderTask(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 30
  },
  last: {
    color: 'white',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: '500'
  },
  seperator: {
    height: 2,
    width: '50%',
    backgroundColor: 'white',
    marginTop: 20
  },
  tasksList: {
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: 20
  },
  taskContainer: {
    flex: 1,
    width: 120,
    height: 120,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  taskTitle: {
    marginLeft: 10,
    marginTop: 10,
    color: 'black'
  },
  taskDescription: {
    marginLeft: 10,
    marginRight: 10,
    color: 'red',
    fontWeight: '400',
    fontSize: 15
  }
})

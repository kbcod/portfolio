import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native'
export default class Activity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activities: [
        {
          name: 'Abriella Bond',
          photo: 'https://source.unsplash.com/random',
          action: 'answer',
          time: '10m'
        },
        {
          name: 'Sam Rockwell',
          photo: 'https://source.unsplash.com/random',
          action: 'answer',
          time: '15m'
        },
        {
          name: 'Gerard Butler',
          photo: 'https://source.unsplash.com/random',
          action: 'answer',
          time: '15m'
        },
        {
          name: 'Jeremy Martinez',
          photo: 'https://source.unsplash.com/random',
          action: 'answer',
          time: '25m'
        },
        {
          name: 'Hayden Christensen',
          photo: 'https://source.unsplash.com/random',
          action: 'answer',
          time: '55m'
        }
      ]
    }
  }

  onPressUser = user => {}

  renderActivity = activity => {
    return (
      <View style={styles.activityContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(activity.item.name)}>
          <Image style={styles.avatar} source={{ uri: activity.item.photo }} />
        </TouchableOpacity>
        <Text>
          <Text style={styles.name}>{activity.item.name}</Text>
          <Text style={styles.action}>
            {' '}
            {activity.item.action == 'answer' ? 'answered your question' : 'asked you a question'}
          </Text>
          <Text style={styles.time}> {activity.item.time}</Text>
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Activity</Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.activityList}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={this.state.activities}
          renderItem={item => this.renderActivity(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#4A90E2'
  },
  avatarContainer: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  activityList: {
    marginTop: 20
  },
  activityContainer: {
    flexDirection: 'row',
    borderBottomColor: '#DEDADA',
    borderBottomWidth: 1,
    height: 60,
    marginTop: 20,
    justifyContent: 'flex-start'
  },
  name: {
    color: '#4F4E4E',
    fontSize: 12,
    fontWeight: '700'
  },
  action: {
    color: '#4F4E4E',
    fontSize: 12,
    fontWeight: '400'
  },
  time: {
    color: '#CECECE',
    fontSize: 12,
    fontWeight: '700',
    alignSelf: 'flex-end'
  }
})

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
  FlatList
} from 'react-native'

const imgs = {
  menu: require('./img/menu.png')
}
type Props = {}
export default class Activity extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      activities: [
        {
          uid: 5964590,
          name: 'Amy Alvarado',
          avatar: 'https://picsum.photos/300/300',
          action: 'liked',
          title: 'A Day Inside a Tree',
          time: '40s'
        },
        {
          uid: 3183940,
          name: 'Amanda Ortega',
          avatar: 'https://picsum.photos/300/300',
          action: 'commented',
          title: 'A Day Inside a Tree',
          comment:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
          time: '10m'
        },
        {
          uid: 1120832,
          name: 'Amanda Ortega',
          avatar: 'https://picsum.photos/300/300',
          action: 'liked',
          title: 'A Day Inside a Tree',
          time: '20m'
        },
        {
          uid: 5832910,
          name: 'Daniel Sinson',
          avatar: 'https://picsum.photos/300/300',
          action: 'liked',
          title: 'A Day Inside a Tree',
          time: '25m'
        },
        {
          uid: 9428102,
          name: 'Towson Thurgood',
          avatar: 'https://picsum.photos/300/300',
          action: 'liked',
          title: 'A Day Inside a Tree',
          time: '55m'
        },
        {
          uid: 4192281,
          name: 'Xavier Addison',
          avatar: 'https://picsum.photos/300/300',
          action: 'followed you',
          time: '2h'
        }
      ]
    }
  }

  onPressMenu = () => {}

  onPressUser = user => {}

  renderActivity = activity => {
    return (
      <View style={styles.activityContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(activity.item.uid)}>
          <Image style={styles.avatar} source={{ uri: activity.item.avatar }} />
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <Text style={styles.name}>
            {activity.item.name} <Text style={styles.action}>{activity.item.action} </Text>
            <Text style={styles.title}>{JSON.stringify(activity.item.title)}</Text>
          </Text>
          {activity.item.comment ? <Text style={styles.comment}>{activity.item.comment}</Text> : null}
          <Text style={styles.time}>{activity.item.time} ago</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressMenu()}>
            <Image source={imgs.menu} />
          </TouchableOpacity>
          <Text style={styles.header}>ACTIVITY</Text>
          <View />
        </View>

        <FlatList
          style={styles.activitiesList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={item => this.renderActivity(item)}
          data={this.state.activities}
          extraData={this.state}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  menuContainer: {
    position: 'absolute',
    top: 30,
    left: 15
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '700'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
    backgroundColor: '#C2C2C2'
  },
  name: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: '500'
  },
  followContainer: {
    marginTop: 10,
    width: 120,
    height: 30,
    backgroundColor: '#377EFE',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  follow: {
    color: 'white'
  },
  activitiesList: {
    padding: 20,
    alignSelf: 'stretch',
    paddingBottom: 40
  },
  userContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  avatarContainer: {
    marginRight: 30
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C2C2C2'
  },
  activityContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingLeft: 0,
    padding: 10
  },
  bodyContainer: {
    flexDirection: 'column',
    width: '70%'
  },
  name: {
    color: '#4A4A4A',
    fontWeight: '400'
  },
  action: {
    marginTop: 5,
    fontSize: 13,
    color: '#D3D3D3',
    fontWeight: '500',
    marginRight: 30
  },
  title: {
    color: '#4A4A4A',
    fontWeight: '600'
  },
  time: {
    color: '#B3BDC9',
    marginTop: 10
  },
  comment: {
    color: '#7A8696',
    marginTop: 10
  }
})

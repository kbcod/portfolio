import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native'
const imgs = {
  new: require('./img/home-create.png')
}
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: [
        {
          category: 'Outdoors',
          title: 'Travel Down Stream Under Rays of Sunlight',
          location: '4852 Oakwood Drive',
          photo: 'https://source.unsplash.com/random'
        },
        {
          category: 'Animals',
          title: 'Catch Snaps of Beautiful Fury Forest Foxes',
          location: 'Hanover National Park',
          photo: 'https://source.unsplash.com/random'
        }
      ],
      users: [
        {
          name: 'Rebecca',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Peter',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Sophia',
          photo: 'https://source.unsplash.com/random'
        },
        {
          name: 'Micheal',
          photo: 'https://source.unsplash.com/random'
        }
      ],
      live: [
        {
          name: 'Maurico’s Pies',
          friends: '10',
          location: [46.2392, 124.53]
        },
        {
          name: 'Bath Bird Works',
          friends: '20',
          location: [-204.281, 95.23]
        },
        {
          name: 'Mike and Ray',
          friends: '5',
          location: [-50.381, 15.23]
        },
        {
          name: 'Dollar Slices',
          friends: '30',
          location: [125.579, 80.23]
        }
      ]
    }
  }

  onPressNew = () => {}

  onPressPost = () => {}

  onPressUser = user => {}

  onPressLive = live => {}

  renderActivity = activity => {
    return (
      <TouchableOpacity onPress={() => this.onPressPost(activity.item)}>
        <ImageBackground source={{ uri: activity.item.photo }} style={styles.activityPhoto}>
          <View style={styles.activityContainer}>
            <Text style={styles.activityCategory}>{activity.item.category}</Text>
            <Text numberOfLines={2} style={styles.activityTitle}>
              {activity.item.title}
            </Text>
            <Text style={styles.activityLocation}>{activity.item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  renderUser = user => {
    return (
      <TouchableOpacity style={styles.avatarContainer} onPress={() => this.onPressUser(user.item)}>
        <Image style={styles.avatar} source={{ uri: user.item.photo }} />
        <Text style={styles.username}>{user.item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderMap = () => {
    return <View style={styles.map} />
  }

  renderLive = live => {
    return (
      <TouchableOpacity style={styles.liveContainer} onPress={() => this.onPressLive(live.item)}>
        {this.renderMap()}
        <Text style={styles.venue}>{live.item.name}</Text>
        <Text style={styles.friends}>{live.item.friends} Buddies</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.new} onPress={() => this.onPressNew()}>
              <Image source={imgs.new} />
            </TouchableOpacity>
          </View>
          <View style={[styles.sectionContainer, styles.topSectionContainer]}>
            <Text style={styles.title}>ACTIVITIES</Text>
            <View style={styles.contentContainer}>
              <FlatList
                keyExtractor={(item, index) => JSON.stringify(index)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.activities}
                renderItem={item => this.renderActivity(item)}
              />
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>BUDDIES</Text>
            <View style={styles.contentContainer}>
              <FlatList
                keyExtractor={(item, index) => JSON.stringify(index)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.users}
                renderItem={item => this.renderUser(item)}
              />
            </View>
          </View>
          <View style={[styles.sectionContainer, styles.liveSectionContainer]}>
            <Text style={styles.title}>LIVE</Text>
            <View style={styles.contentContainer}>
              <FlatList
                keyExtractor={(item, index) => JSON.stringify(index)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.live}
                renderItem={item => this.renderLive(item)}
              />
            </View>
          </View>
          <View />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
  headerContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(254,80,80,1)',
    height: '35%',
    opacity: 1,
    width: 375
  },
  base: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  new: {
    position: 'absolute',
    top: 40,
    right: 20,
    alignSelf: 'flex-end'
  },
  scroll: {},
  sectionContainer: {
    height: 200,
    marginTop: 70,
    marginLeft: 30
  },
  topSectionContainer: {
    marginTop: 100,
    height: 300
  },
  liveSectionContainer: {
    marginTop: 20,
    height: 350,
    marginLeft: 30
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700'
  },
  activityContainer: {
    borderRadius: 5
  },
  activityPhoto: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'gray',
    borderRadius: 5,
    marginRight: 20
  },
  activityCategory: {
    color: 'white',
    fontSize: 15,
    fontWeight: '100'
  },
  activityTitle: {
    width: '70%',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10
  },
  activityLocation: {
    color: 'white',
    fontSize: 15,
    fontWeight: '200',
    marginTop: 10
  },
  activityContainer: {
    width: '100%',
    paddingLeft: 30,
    paddingBottom: 30,
    borderRadius: 5
  },
  contentContainer: {
    marginTop: 10,
    height: '100%'
  },
  avatarContainer: {
    width: 100,
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center'
  },
  liveContainer: {
    marginRight: 30
  },
  map: {
    backgroundColor: 'gray',
    height: 200,
    width: 200
  },
  venue: {
    height: 15.94,
    marginTop: 20,
    fontWeight: '700'
  },
  friends: {
    height: 15.94,
    marginTop: 10,
    fontWeight: '100',
    color: '#A3A3A3'
  }
})

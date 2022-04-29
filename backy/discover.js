import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image
} from 'react-native'

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

const imgs = {
  star: require('./img/rate-star.png'),
  search: require('./img/search-icon.png')
}

export default class Discover extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      tab: 0,
      activites: [
        {
          category: 'Outdoors',
          title: 'Travel Down Stream Under Rays of Sunlight',
          location: '4852 Oakwood Drive',
          photo: 'https://source.unsplash.com/random',
          rate: 5
        },
        {
          category: 'Animals',
          title: 'Catch Snaps of Beautiful Fury Forest Foxes',
          location: 'Hanover National Park',
          photo: 'https://source.unsplash.com/random',
          rate: 3
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
      ]
    }
  }

  onPressTab = tab => {
    this.setState({ tab })
  }

  onPressPost = post => {}

  onPressUser = user => {}

  renderActivity = activity => {
    var rate = []
    for (var i = 0; i < activity.item.rate; i++) {
      rate.push(<Image key={i} style={styles.star} source={imgs.star} />)
    }

    return (
      <TouchableOpacity style={styles.activityContainer} onPress={() => this.onPressPost(activity.item)}>
        <ImageBackground source={{ uri: activity.item.photo }} style={styles.activityPhoto}>
          <View style={styles.infoContainer}>
            <Text style={styles.activityCategory}>{activity.item.category}</Text>
            <Text numberOfLines={2} style={styles.activityTitle}>
              {activity.item.title}
            </Text>
            <Text style={styles.activityLocation}>{activity.item.location}</Text>

            <View style={styles.rateContainer}>{rate}</View>
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>DISCOVER</Text>
          <View style={styles.inputContainer}>
            <Image style={styles.searchIcon} source={imgs.search} />
            <TextInput placeholder="search" style={styles.input} />
          </View>
        </View>
        <View style={styles.tabsContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={item => this.onPressTab(0)}>
              <Text style={styles.navTab}>Activites</Text>
            </TouchableOpacity>
            {this.state.tab == 0 ? <View style={styles.active} /> : null}
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={item => this.onPressTab(1)}>
              <Text style={styles.navTab}>Users</Text>
            </TouchableOpacity>
            {this.state.tab == 1 ? <View style={styles.active} /> : null}
          </View>
        </View>
        {this.state.tab == 0 ? (
          <FlatList
            key={0}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            style={styles.activitesList}
            renderItem={item => this.renderActivity(item)}
            data={this.state.activites}
          />
        ) : (
          <FlatList
            key={1}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={item => this.renderUser(item)}
            data={this.state.users}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'column', justifyContent: 'flex-start' },
  title: { fontSize: 30, fontWeight: '800', color: 'black' },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    paddingLeft: 25
  },
  searchIcon: {
    position: 'absolute'
  },
  tabsContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10
  },
  tabContainer: {},
  navTab: { fontSize: 15, fontWeight: '500', color: '#D8D9DF' },
  active: {
    backgroundColor: '#FE5050',
    height: 2,
    width: '100%',
    marginTop: 5
  },
  activitesList: { width: '100%', marginTop: 10, borderRadius: 5 },
  activityPhoto: {
    height: WIDTH,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'gray',
    borderRadius: 5
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
    marginBottom: 10,
    borderRadius: 5
  },
  infoContainer: {
    width: '100%',
    paddingLeft: 30,
    paddingBottom: 30,
    borderRadius: 5
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 10
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
  }
})

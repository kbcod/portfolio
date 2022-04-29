import React, { Component } from 'react'
import { StyleSheet, ScrollView, ImageBackground, View, TouchableOpacity, Image, Text } from 'react-native'

const imgs = {
  close: require('./img/activity-close.png'),
  star: require('./img/activity-star.png')
}

export default class Activity extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      bg: 'https://source.unsplash.com/random',
      avatar: 'https://source.unsplash.com/random',
      title: 'Catch Snaps of Beautiful Fury Forest Foxes',
      time: '5 HR 30 MIN',
      category: 'ANIMALS',
      cost: '10',
      distance: '20 Mi',
      stops: '5',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a justo congue, ullamcorper risus eu, porta orci. Nullam mollis ultricies nisl, vulputate consequat erat efficitur at. Duis blandit eu mauris non pellentesque. Fusce accumsan luctus massa quis cursus. Vivamus sagittis vehicula diam. Sed et suscipit dui. Suspendisse elementum lectus ante.',
      tripStops:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a justo congue, ullamcorper risus eu, porta orci. Nullam mollis ultricies nisl, vulputate consequat erat efficitur at. Duis blandit eu mauris non pellentesque. Fusce accumsan luctus massa quis cursus. Vivamus sagittis vehicula diam. Sed et suscipit dui. Suspendisse elementum lectus ante.',
      tripInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a justo congue, ullamcorper risus eu, porta orci. Nullam mollis ultricies nisl, vulputate consequat erat efficitur at. Duis blandit eu mauris non pellentesque. Fusce accumsan luctus massa quis cursus. Vivamus sagittis vehicula diam. Sed et suscipit dui. Suspendisse elementum lectus ante.'
    }
  }

  onPressClose = () => {}

  onPressAvatar = () => {}

  onPressCategory = () => {}

  onPressStar = () => {}

  render() {
    return (
      <ScrollView style={styles.containerContainer}>
        <ImageBackground style={styles.headerContainer} source={{ uri: this.state.bg }}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={item => this.onPressClose()}>
              <Image style={styles.close} source={imgs.close} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatarContainer} onPress={item => this.onPressAvatar()}>
              <Image style={styles.profile} source={{ uri: this.state.avatar }} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{this.state.title}</Text>
          <View style={styles.headerDetailsContainer}>
            <Text style={styles.time}>{this.state.time}</Text>
            <TouchableOpacity onPress={item => this.onPressCategory()}>
              <Text style={styles.category}>{this.state.category}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerStatsContainer}>
            <View style={styles.statContainer}>
              <Text style={styles.statName}>COST</Text>
              <Text style={styles.statValue}>{this.state.cost}</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.statContainer}>
              <Text style={styles.statName}>DISTANCE</Text>
              <Text style={styles.statValue}>{this.state.distance}</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.statContainer}>
              <Text style={styles.statName}>STOPS</Text>
              <Text style={styles.statValue}>{this.state.stops}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.contentContainer}>
          <View style={styles.bodyContainer}>
            <Text style={styles.contentHeader}>OVERVIEW</Text>
            <Text style={styles.contentBody}>{this.state.overview}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.contentHeader}>STOPS</Text>
            <Text style={styles.contentBody}>{this.state.tripStops}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.contentHeader}>TRIP INFO</Text>
            <Text style={styles.contentBody}>{this.state.tripInfo}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.contentHeader}>RATE</Text>
            <Text style={styles.contentBody}>Did you explore this activity? Give it a rating!</Text>
          </View>
          <View style={styles.starsContainer}>
            <TouchableOpacity style={styles.star} onPress={item => this.onPressStar()}>
              <Image source={imgs.star} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={item => this.onPressStar()}>
              <Image source={imgs.star} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={item => this.onPressStar()}>
              <Image source={imgs.star} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={item => this.onPressStar()}>
              <Image source={imgs.star} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={item => this.onPressStar()}>
              <Image source={imgs.star} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  containerContainer: { flex: 1 },
  headerContainer: {
    flexDirection: 'column',
    backgroundColor: 'red',
    padding: 20
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  },
  close: { width: 20, height: 20 },
  avatarContainer: {},
  profile: { width: 50, height: 50, borderRadius: 25 },
  title: { fontSize: 25, fontWeight: '800', color: 'white' },
  headerDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center'
  },
  time: { fontSize: 15, fontWeight: '400', color: 'white' },
  category: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    padding: 2,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5
  },
  headerStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  statContainer: {},
  statName: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    padding: 10,
    textAlign: 'center'
  },
  statValue: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center'
  },
  seperator: {
    height: '80%',
    backgroundColor: 'white',
    width: 1,
    alignSelf: 'center'
  },
  contentContainer: { padding: 20 },
  bodyContainer: {},
  contentHeader: { fontSize: 20, fontWeight: '700', color: '#454547' },
  contentBody: {
    fontSize: 15,
    fontWeight: '300',
    color: '#C1C1C1',
    marginBottom: 20,
    marginTop: 10
  },
  starsContainer: {
    width: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, FlatList, ScrollView } from 'react-native'

const imgs = {
  sunny: require('./img/sunny.png'),
  windy: require('./img/windy.png'),
  cloudsun: require('./img/cloudsun.png'),
  storm: require('./img/storm.png'),
  sun: require('./img/storm.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      day: 'MON',
      date: '12 APR 2018',
      places: [
        {
          background: '#FF5656',
          weather: 'Sunny',
          temp: '85',
          city: 'New York',
          humidity: 0.25,
          precipitation: 0.4,
          wind: 0.05,
          days: [
            {
              day: 'SUN',
              weather: 'sun',
              high: '80°',
              low: '60°'
            },
            {
              day: 'MON',
              weather: 'storm',
              high: '74°',
              low: '67°'
            },
            {
              day: 'TUES',
              weather: 'sun',
              high: '85°',
              low: '50°'
            },
            {
              day: 'WED',
              weather: 'sun',
              high: '90°',
              low: '80°'
            },
            {
              day: 'THURS',
              weather: 'storm',
              high: '70°',
              low: '55°'
            },
            {
              day: 'FRI',
              weather: 'cloudsun',
              high: '80°',
              low: '65°'
            },
            {
              day: 'SAT',
              weather: 'sun',
              high: '100°',
              low: '80°'
            }
          ]
        },
        {
          background: '#4F9AFF',
          weather: 'Windy',
          temp: '65',
          city: 'Richmond',
          humidity: 0.5,
          precipitation: 0.15,
          wind: 0.9,
          days: [
            {
              day: 'SUN',
              weather: 'cloudsun',
              high: '70°',
              low: '55°'
            },
            {
              day: 'MON',
              weather: 'cloudsun',
              high: '50°',
              low: '40°'
            },
            {
              day: 'TUES',
              weather: 'cloudsun',
              high: '80°',
              low: '50°'
            },
            {
              day: 'WED',
              weather: 'storm',
              high: '55°',
              low: '45°'
            },
            {
              day: 'THURS',
              weather: 'storm',
              high: '45°',
              low: '30°'
            },
            {
              day: 'FRI',
              weather: 'cloudsun',
              high: '40°',
              low: '30°'
            },
            {
              day: 'SAT',
              weather: 'cloudsun',
              high: '80°',
              low: '60°'
            }
          ]
        }
      ]
    }
  }

  renderDay = day => {
    return (
      <View style={styles.dayContainer}>
        {day.item.day == this.state.day ? <View style={styles.active} /> : null}
        <Text style={[styles.day, this.state.day != day.item.day ? { marginTop: 10 } : null]}>
          {day.item.day}
        </Text>
        <Image source={imgs[day.item.weather.toLowerCase()]} />
        <Text style={styles.highLow}>
          <Text>
            {day.item.high}/{day.item.low}
          </Text>
        </Text>
      </View>
    )
  }

  renderLocations = () => {
    var places = []

    for (var x in this.state.places) {
      var place = this.state.places[x]

      places.push(
        <View key={x} style={[styles.container, { backgroundColor: place.background }]}>
          <View style={styles.headerContainer}>
            <View style={styles.locationContainer}>
              <View style={styles.border} />
              <View style={styles.locationDateContainer}>
                <Text style={styles.location}>{place.city.toUpperCase()}</Text>
                <Text style={styles.date}>{this.state.date}</Text>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Image source={imgs[place.weather.toLowerCase()]} />
            </View>
          </View>
          <View style={styles.climateContainer}>
            <View style={styles.metricContainer}>
              <Text style={styles.percent}>{place.humidity * 100}%</Text>
              <Text style={styles.metric}>Humidity</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.percent}>{place.precipitation * 100}%</Text>
              <Text style={styles.metric}>Precipitation</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.percent}>{place.wind * 100}%</Text>
              <Text style={styles.metric}>Wind</Text>
            </View>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.weather}>{place.weather}</Text>
            <Text style={styles.temperature}>{place.temp}</Text>
          </View>
          <FlatList
            key={x}
            scrollEnabled={false}
            contentContainerStyle={styles.placesList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={place.days}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderDay(item)}
          />
        </View>
      )
    }

    return places
  }

  render() {
    return (
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: WIDTH * this.state.places.length }}
        horizontal={true}>
        {this.renderLocations()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'flex-start' },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  iconContainer: {
    flex: 0.2
  },
  border: {
    width: 3,
    backgroundColor: 'white',
    marginRight: 15,
    height: '85%',
    alignSelf: 'flex-end'
  },
  locationDateContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  date: { color: 'white', fontSize: 15, fontWeight: '800' },
  location: { color: 'white', fontSize: 35, fontWeight: '800' },
  climateContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  metricContainer: {
    flexDirection: 'column'
  },
  percent: {
    fontSize: 11,
    fontWeight: '200',
    color: 'white'
  },
  metric: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    marginRight: 20
  },
  temperatureContainer: {
    marginTop: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 170,
    width: 170,
    borderRadius: 85,
    borderColor: 'white',
    borderWidth: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 0
  },
  weather: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },
  temperature: {
    color: 'white',
    fontSize: 55,
    fontWeight: '600'
  },
  placesList: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
    bottom: 40
  },
  dayContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60
  },
  day: {
    color: 'white',
    fontSize: 10
  },
  highLow: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700'
  },
  active: {
    width: '90%',
    height: 3,
    backgroundColor: 'white'
  }
})

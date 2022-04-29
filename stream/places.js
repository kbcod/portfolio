import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native'

const imgs = {
  add: require('./img/add.png')
}

export default class Places extends Component {
  constructor(props) {
    super(props)

    this.state = {
      places: [
        {
          background: '#FF5656',
          weather: 'Sunny',
          temp: '85°',
          city: 'New York',
          humidity: 0.25,
          precipitation: 0.4,
          wind: 0.05
        },
        {
          background: '#4F9AFF',
          weather: 'Windy',
          temp: '65°',
          city: 'Richmond',
          humidity: 0.5,
          precipitation: 0.15,
          wind: 0.9
        }
      ]
    }
  }

  onPressAdd = () => {}

  onPressPlace = place => {}

  renderPlace = place => {
    return (
      <TouchableOpacity
        onPress={() => this.onPressPlace(place.item)}
        style={[styles.placeContainer, { backgroundColor: place.item.background }]}>
        <View>
          <Text style={styles.location}>{place.item.city.toUpperCase()}</Text>
          <View style={styles.climateContainer}>
            <View style={styles.metricContainer}>
              <Text style={styles.percent}>{place.item.humidity * 100}%</Text>
              <Text style={styles.metric}>Humidity</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.percent}>{place.item.precipitation * 100}%</Text>
              <Text style={styles.metric}>Precipitation</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.percent}>{place.item.wind * 100}%</Text>
              <Text style={styles.metric}>Wind</Text>
            </View>
          </View>
        </View>
        <Text style={styles.temperature}>{place.item.temp}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.placesList}
          showsHorizontalScrollIndicator={false}
          data={this.state.places}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={item => this.renderPlace(item)}
        />
        <TouchableOpacity onPress={() => this.onPressAdd()} style={styles.addContainer}>
          <Image source={imgs.add} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#383838'
  },
  placeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 25
  },
  location: { color: 'white', fontSize: 35, fontWeight: '800' },
  climateContainer: {
    flexDirection: 'row',
    marginTop: 20
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
  temperature: {
    color: 'white',
    fontSize: 50,
    fontWeight: '700'
  },
  addContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0078FF'
  }
})

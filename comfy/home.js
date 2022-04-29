import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native'

const imgs = {
  chart: require('./img/chart.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 1450,
      categories: [
        {
          category: 'School',
          total: 50
        },
        {
          category: 'Travel',
          total: 200
        },
        {
          category: 'Shopping',

          total: 400
        },
        {
          category: 'Health',

          total: 10
        },
        {
          category: 'School',

          total: 400
        },
        {
          category: 'Budget',

          total: 20
        },
        {
          category: 'Shopping',

          total: 100
        },
        {
          category: 'Fun',

          total: 250
        }
      ]
    }
  }

  onPressCategory = category => {}

  renderCategory = category => {
    return (
      <TouchableOpacity onPress={() => this.onPressCategory(category)}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.item.category.toUpperCase()}</Text>
          <Text style={styles.categoryTotal}>{category.item.total} USD</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>SPENDING</Text>
          <TouchableOpacity style={styles.chart}>
            <Image source={imgs.chart} />
          </TouchableOpacity>
        </View>
        <Text style={styles.total}>{this.state.total} USD</Text>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={styles.categoriesList}
          data={this.state.categories}
          renderItem={item => this.renderCategory(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#2AEFAE', flex: 1, padding: 20, paddingBottom: 0 },
  headerContainer: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  title: {
    height: 30,
    fontWeight: '800',
    fontSize: 30,
    color: 'white'
  },
  total: {
    color: '#11808F',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 20,
    padding: 10
  },
  categoriesList: {
    marginTop: 20
  },
  categoryContainer: {
    width: WIDTH / 2 - 30,
    height: 110,
    borderRadius: 5,
    margin: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    padding: 5
  },
  categoryTitle: {
    color: '#11808F'
  },
  categoryTotal: {
    color: '#2AEFAE',
    fontWeight: '800',
    fontSize: 15
  }
})

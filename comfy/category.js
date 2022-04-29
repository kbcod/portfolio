import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native'

const imgs = {
  location: require('./img/location.png')
}

export default class Category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: 'Gas',
      total: 250.45,
      year: 2018,
      purchases: [
        {
          location: 'Harton Shopping Center',
          total: 30.0,
          date: '01-20'
        },
        {
          location: 'Max Shell',
          total: 22.55,
          date: '01-14'
        },
        {
          location: 'Max Shell',
          total: 40.1,
          date: '01-10'
        },
        {
          location: 'Edusib County Gas',
          total: 10.3,
          date: '01-08'
        }
      ]
    }
  }

  onPressPurchase = purchase => {}

  renderPurchase = purchase => {
    return (
      <TouchableOpacity onPress={() => this.onPressPurchase(purchase)}>
        <View style={styles.purchaseContainer}>
          <View style={styles.purchaseTopContainer}>
            <Text style={styles.purchaseLocation}>
              <Image source={imgs.location} />
              {'   '}
              {purchase.item.location}
            </Text>
            <Text style={styles.purchaseDate}>{purchase.item.date}</Text>
          </View>
          <Text style={styles.purchaseTotal}>{purchase.item.total} USD</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{this.state.category.toUpperCase()}</Text>
          <View style={styles.spendingContainer}>
            <Text style={styles.total}>{this.state.total}</Text>
            <Text style={styles.year}>{this.state.year}</Text>
          </View>
          <Text style={styles.spendingLabel}>Total Spending</Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          style={styles.purchasesList}
          data={this.state.purchases}
          renderItem={item => this.renderPurchase(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#2AEFAE', flex: 1, padding: 20, paddingBottom: 0 },
  headerContainer: {
    marginTop: 35,
    flexDirection: 'column',
    justifyContent: 'space-between'
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
    fontWeight: '800'
  },
  year: {
    fontSize: 15,
    fontWeight: '800',
    color: 'rgba(1,1,1,0.1)'
  },
  spendingLabel: {
    fontSize: 15,
    color: '#1EBF8A',
    fontWeight: '400',
    marginTop: 10
  },
  spendingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  purchasesList: {
    marginTop: 20
  },
  purchaseTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  purchaseDate: {
    color: '#11808F',
    fontWeight: '800',
    fontSize: 15
  },
  purchaseContainer: {
    height: 110,
    borderRadius: 5,
    margin: 5,
    marginBottom: 10,
    backgroundColor: '#1EBF8A',
    justifyContent: 'space-between',
    padding: 20
  },
  purchaseLocation: {
    fontSize: 15,
    color: '#2AEFAE'
  },
  purchaseTotal: {
    color: '#11808F',
    fontWeight: '800',
    fontSize: 25
  }
})

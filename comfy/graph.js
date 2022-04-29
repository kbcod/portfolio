import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native'

const imgs = {
  list: require('./img/list.png')
}

export default class Graph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: '1,450',
      min: 80,
      max: 200,
      categories: [
        {
          title: 'Food',
          total: 200
        },
        {
          title: 'Gas',
          total: 150
        },
        {
          title: 'School',
          total: 160
        },
        {
          title: 'Travel',
          total: 80
        },
        {
          title: 'Work',
          total: 180
        }
      ]
    }
  }

  onPressList = () => {}

  onPressMargin = () => {}

  renderYAxis = item => {
    return <Text style={styles.yAxis}>{item.item}</Text>
  }

  renderCategory = category => {
    return (
      <View style={styles.barContainer}>
        <View style={[styles.bar, { flex: category.item.total / this.state.max }]} />
        <Text style={styles.category}>{category.item.title}</Text>
      </View>
    )
  }

  render() {
    var yVals = []
    var i = 0
    while (i < this.state.max + 20) {
      yVals.push(i)
      i += 20
    }

    yVals.reverse()

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View />
          <Text style={styles.title}>{this.state.total} USD</Text>
          <TouchableOpacity onPressList={() => this.onPressList()} style={styles.list}>
            <Image source={imgs.list} />
          </TouchableOpacity>
        </View>

        <View style={styles.chartContainer}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            style={styles.purchasesList}
            data={yVals}
            renderItem={item => this.renderYAxis(item)}
          />
          <FlatList
            horizontal={true}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsHorizontalScrollIndicator={false}
            style={styles.purchasesList}
            data={this.state.categories}
            renderItem={item => this.renderCategory(item)}
          />
        </View>
        <View style={styles.marginsContainer}>
          <TouchableOpacity style={styles.marginContainer} onPress={item => this.onPressMargin()}>
            <Text style={styles.margin}>{this.state.min} USD</Text>
            <Text style={styles.marginCategory}>LOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marginContainer} onPress={item => this.onPressMargin()}>
            <Text style={styles.margin}>{this.state.max} USD</Text>
            <Text style={styles.marginCategory}>HIGH</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center'
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
    marginTop: 20
  },
  chartContainer: {
    flexDirection: 'row',
    marginTop: 55
  },
  yAxis: {
    width: 50,
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 10
  },
  category: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 10
  },
  barContainer: {
    paddingRight: 35,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bar: {
    width: 45,
    backgroundColor: 'white',
    borderRadius: 10
  },
  marginsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10
  },
  marginContainer: {
    margin: 20,
    padding: 40,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#1EBF8A',
    borderRadius: 5
  },
  margin: {
    textAlign: 'center',
    width: 50,
    fontWeight: '800',
    fontSize: 15,
    color: 'white'
  },
  marginCategory: {
    marginTop: 10,
    color: '#11808F',
    fontWeight: '800',
    fontSize: 15,
    textAlign: 'center'
  }
})

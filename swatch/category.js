import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'

const imgs = {
  options: require('./img/options.png'),
  save: require('./img/save.png')
}
type Props = {}
export default class Category extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'dark', // light/dark
      category: 'Chores',
      year: 17,
      month: 'February',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      categories: ['BAND', 'CHORES', 'COOKING', 'FAMILY', 'GROCERIES', 'GYM', 'SCHOOL', 'WORK']
    }
  }

  onPressYear = () => {}

  onPressOptions = () => {}

  onPressCategory = category => {
    this.setState({ category })
  }

  onPressMonth = month => {
    this.setState({ month })
  }

  renderMonth = month => {
    return (
      <TouchableOpacity onPress={() => this.onPressMonth(month.item)} style={styles.monthContainer}>
        <Text style={this.state.theme == 'light' ? styles.monthLight : styles.monthDark}>
          {month.item.toUpperCase()}
        </Text>
        {this.state.month == month.item ? <View style={styles.active} /> : null}
      </TouchableOpacity>
    )
  }

  renderCategory = category => {
    return (
      <TouchableOpacity onPress={() => this.onPressCategory(category.item)} style={styles.categoryContainer}>
        {this.state.category.toUpperCase() == category.item ? <View style={styles.categoryActive} /> : null}
        <Text style={this.state.theme == 'light' ? styles.categoryLight : styles.categoryDark}>
          {category.item}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={this.state.theme == 'light' ? styles.containerLight : styles.containerDark}>
        <View
          style={[
            styles.headerContainer,
            this.state.theme == 'light' ? { borderBottomColor: 'black' } : { borderBottomColor: 'white' }
          ]}>
          <TouchableOpacity onPress={() => this.onPressYear()}>
            <Text style={this.state.theme == 'light' ? styles.yearLight : styles.yearDark}>
              {this.state.year}
            </Text>
          </TouchableOpacity>
          <FlatList
            style={styles.monthList}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.months}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderMonth(item)}
          />
          <TouchableOpacity onPress={() => this.onPressOptions()}>
            <Image
              style={this.state.theme == 'light' ? { tintColor: 'black' } : null}
              source={imgs.options}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <TextInput
            style={this.state.theme == 'light' ? styles.inputLight : styles.inputDark}
            placeholder="New cateogry"
            placeholderTextColor={this.state.theme == 'light' ? 'black' : 'white'}
          />
          <FlatList
            style={styles.categoriesList}
            showsVerticalScrollIndicator={false}
            data={this.state.categories}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderCategory(item)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'black'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    borderBottomWidth: 1
  },
  yearLight: {
    color: 'white',
    padding: 10,
    backgroundColor: 'black',
    fontSize: 15,
    fontWeight: '600'
  },
  yearDark: {
    color: 'black',
    padding: 10,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: '600'
  },
  monthList: {
    marginLeft: 25,
    marginRight: 25
  },
  monthContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  monthLight: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  },
  monthDark: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  active: {
    width: '100%',
    height: 2,
    backgroundColor: '#50FBFE',
    alignSelf: 'center'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 30
  },
  inputLight: {
    paddingBottom: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  inputDark: {
    paddingBottom: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white'
  },
  categoriesList: {
    marginTop: 30
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  categoryLight: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400'
  },
  categoryDark: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400'
  },
  categoryActive: {
    width: 2,
    height: '100%',
    backgroundColor: '#50FBFE',
    marginRight: 10
  }
})

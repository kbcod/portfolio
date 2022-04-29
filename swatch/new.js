import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView
} from 'react-native'

const imgs = {
  close: require('./img/close.png'),
  save: require('./img/save.png')
}
type Props = {}
export default class New extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light', // light/dark
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      days: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
      ],
      years: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
    }
  }

  onPressSave = () => {}

  onPressClose = () => {}

  onPressDay = day => {}

  onPressMonth = month => {}

  onPressYear = year => {}

  renderMonth = month => {
    return (
      <View style={styles.month}>
        <TouchableOpacity
          onPress={() => this.onPressMonth(month.item)}
          style={this.state.theme == 'light' ? styles.optionContainerLight : styles.optionContainerDark}>
          <Text style={this.state.theme == 'light' ? styles.optionLight : styles.optionDark}>
            {month.item.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderDay = day => {
    return (
      <View style={styles.day}>
        <TouchableOpacity
          onPress={() => this.onPressDay(day.item)}
          style={this.state.theme == 'light' ? styles.optionContainerLight : styles.optionContainerDark}>
          <Text style={this.state.theme == 'light' ? styles.optionLight : styles.optionDark}>{day.item}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderYear = year => {
    return (
      <View style={styles.day}>
        <TouchableOpacity
          onPress={() => this.onPressYear(year.item)}
          style={this.state.theme == 'light' ? styles.optionContainerLight : styles.optionContainerDark}>
          <Text style={this.state.theme == 'light' ? styles.optionLight : styles.optionDark}>
            {year.item}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={this.state.theme == 'light' ? styles.containerLight : styles.containerDark}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressClose()}>
            <Image style={this.state.theme == 'dark' ? { tintColor: 'white' } : null} source={imgs.close} />
          </TouchableOpacity>
          <Text style={this.state.theme == 'light' ? styles.titleLight : styles.titleDark}>NEW</Text>
          <TouchableOpacity
            style={this.state.theme == 'light' ? styles.saveContainerLight : styles.saveContainerDark}
            onPress={() => this.onPressSave()}>
            <Image style={this.state.theme == 'light' ? { tintColor: 'white' } : null} source={imgs.save} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>
            TITLE
          </Text>
          <TextInput
            placeholder="Enter a title"
            placeholderTextColor={this.state.theme == 'light' ? '#9D9D9D' : 'white'}
            textAlign="left"
            style={this.state.theme == 'light' ? styles.inputLight : styles.inputDark}
          />
          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>
            MONTH
          </Text>
          <FlatList
            scrollEnabled={false}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            numColumns={4}
            contentContainerStyle={styles.monthsList}
            data={this.state.months}
            renderItem={item => this.renderMonth(item)}
          />
          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>DAY</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            horizontal={true}
            contentContainerStyle={styles.daysList}
            data={this.state.days}
            renderItem={item => this.renderDay(item)}
          />
          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>YEAR</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            horizontal={true}
            contentContainerStyle={styles.yearsList}
            data={this.state.years}
            renderItem={item => this.renderYear(item)}
          />

          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>TIME</Text>
          <TextInput
            placeholder="00:00"
            placeholderTextColor={this.state.theme == 'light' ? 'black' : 'white'}
            style={this.state.theme == 'light' ? styles.timeLight : styles.timeDark}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
    padding: 15
  },
  headerContainer: {
    marginTop: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleLight: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600'
  },
  titleDark: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },
  subHeaderLight: {
    color: '#9D9D9D',
    fontSize: 15,
    fontWeight: '200',
    marginBottom: 20,
    marginTop: 20
  },
  subHeaderDark: {
    color: 'white',
    fontSize: 15,
    fontWeight: '200',
    marginBottom: 20,
    marginTop: 20
  },
  inputLight: {
    width: '100%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 30
  },
  inputDark: {
    width: '100%',
    height: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 30
  },
  monthsList: {
    width: '100%',
    justifyContent: 'space-between'
  },
  month: {
    flex: 1,
    justifyContent: 'center'
  },
  optionContainerLight: {
    width: 60,
    height: 60,
    borderColor: '#D8D9DF',
    borderRadius: 2,
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionContainerDark: {
    width: 60,
    height: 60,
    borderColor: '#D8D9DF',
    borderRadius: 2,
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionLight: {
    textAlign: 'center',
    color: 'black',
    fontSize: 10,
    fontWeight: '600'
  },
  optionDark: {
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
    fontWeight: '600'
  },
  daysList: {},
  yearsList: {},
  timeLight: {
    width: '40%',
    height: 60,
    borderColor: '#D8D9DF',
    borderRadius: 2,
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700'
  },
  timeDark: {
    width: '40%',
    height: 60,
    borderColor: '#D8D9DF',
    borderRadius: 2,
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700'
  },
  saveContainerDark: {
    backgroundColor: 'white',
    padding: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveContainerLight: {
    backgroundColor: 'black',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, TextInput, FlatList } from 'react-native'

const imgs = {
  close: require('./img/close.png')
}

export default class Time extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      date: 'FEB 25, 18'
    }
  }

  onPressClose = () => {}

  onPressDate = () => {}

  onPressSave = () => {}

  renderTheme = theme => {
    return (
      <TouchableOpacity
        style={[styles.theme, { backgroundColor: theme.item.color }]}
        onPress={item => this.onPressTheme()}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={item => this.onPressClose()}>
            <Image source={imgs.close} />
          </TouchableOpacity>
          <Text style={styles.title}>NEW TIME</Text>
          <View />
        </View>
        <View />
        <Text style={styles.heading}>Title</Text>
        <TextInput
          placeholder="What would you like to name this time?"
          placeholderTextColor="lightgray"
          textAlign="center"
          style={styles.input}
        />
        <View style={styles.line} />
        <Text style={styles.heading}>Time</Text>
        <View style={styles.slotsContainer}>
          <View style={styles.timeSlotContainer}>
            <TextInput maxLength={1} style={styles.time} />
            <Text style={styles.timeLabel}>HOUR</Text>
          </View>
          <View style={styles.timeSlotContainer}>
            <TextInput maxLength={1} style={styles.time} />
            <Text style={styles.timeLabel}>HOUR</Text>
          </View>
          <Text style={styles.colon}>:</Text>
          <View style={styles.timeSlotContainer}>
            <TextInput maxLength={1} style={styles.time} />
            <Text style={styles.timeLabel}>MINUTES</Text>
          </View>
          <View style={styles.timeSlotContainer}>
            <TextInput maxLength={1} style={styles.time} />
            <Text style={styles.timeLabel}>MINUTES</Text>
          </View>
        </View>
        <Text style={styles.heading}>Date</Text>
        <TouchableOpacity onPress={item => this.onPressDate()}>
          <Text style={styles.date}>{this.state.date}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveContainer} onPress={item => this.onPressSave()}>
          <Text style={styles.save}>SAVE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', alignItems: 'center' },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center'
  },
  heading: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    marginTop: 30,
    marginBottom: 35
  },
  input: { width: '90%', height: 40, color: 'white' },
  line: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    height: 1
  },
  slotsContainer: {
    flexDirection: 'row'
  },
  timeSlotContainer: {
    flexDirection: 'column',
    margin: 10
  },
  time: {
    width: 60,
    height: 70,
    borderColor: 'white',
    borderWidth: 3,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  timeLabel: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  colon: {
    height: '60%',
    fontSize: 30,
    fontWeight: '800',
    alignSelf: 'center',
    color: 'white'
  },
  date: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  saveContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: 55,
    backgroundColor: 'white'
  },
  save: { fontSize: 30, fontWeight: '800', color: 'black' }
})

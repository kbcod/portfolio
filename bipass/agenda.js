import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList, Animated, Easing } from 'react-native'

const Dimensions = require('Dimensions')

const imgs = {
  back: require('./img/back.png'),
  pause: require('./img/pause.png')
}

export default class Agenda extends Component<{}> {
  componentDidMount() {
    Animated.sequence([
      Animated.delay(0),
      Animated.timing(this._progress, {
        toValue: 1,
        duration: this.state.time,
        easing: Easing.inOut(Easing.ease)
      })
    ]).start()
  }

  constructor(props) {
    super(props)

    this._progress = new Animated.Value(0)

    this.state = {
      title: 'Contact Distributor',
      time: 10000,
      timer: '0:00:00',
      duration: '10 SEC',
      quote: '“He who owns time owns his mind” - Anon',
      active: '9:45',
      agenda: 'Work',
      startTime: '0:00:00',
      endTime: '00:00:10',
      theme: '#07FFC7',
      times: [
        { time: '9:30', title: 'Employee Review', duration: '15m' },
        { time: '9:45', title: 'Contact Distributor', duration: '30m' },
        { time: '10:15', title: 'Clean Desk', duration: '10m' },
        { time: '10:20', title: 'Lunch Break', duration: '40m' }
      ]
    }
  }

  onPressBack = () => {}

  onPressPause = () => {}

  onPressNew = () => {}

  renderTime = time => {
    return (
      <View style={styles.timeContainer}>
        <View style={styles.timeContentContainer}>
          <Text style={styles.timeLabel}>{time.item.time}</Text>
          <View style={styles.seperator} />
          <View style={styles.detailContainer}>
            <Text style={styles.timeTitleLabel}>{time.item.title}</Text>
            <Text style={styles.timeDurationLabel}>{time.item.duration}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.timeSelect, this.state.active == time.item.time ? { backgroundColor: 'red' } : null]}
        />
      </View>
    )
  }

  render() {
    const radialTime = {
      width: Animated.multiply(this._progress, 150),
      height: Animated.multiply(this._progress, 150),
      borderRadius: Animated.multiply(this._progress, 75),
      backgroundColor: this.state.theme
    }

    const timelineProgress = {
      width: Animated.multiply(this._progress, Dimensions.get('window').width),
      backgroundColor: this.state.theme,
      height: 4
    }

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={item => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.title}>{this.state.agenda.toUpperCase()}</Text>
          <TouchableOpacity onPress={item => this.onPressPause()}>
            <Image source={imgs.pause} />
          </TouchableOpacity>
        </View>
        <View style={styles.timerContainer}>
          <View style={styles.radialContainer}>
            <Animated.View style={radialTime} />
            <View style={styles.radial} />
            <Text style={[styles.timerTime, { position: 'absolute' }]}>{this.state.timer}</Text>
            <Text style={[styles.duration, { position: 'absolute', paddingTop: 50 }]}>
              {this.state.duration}
            </Text>
          </View>
          <Text style={styles.timeTitle}>{this.state.title.toUpperCase()}</Text>
          <Text style={styles.timeQuote} numberOfLines={2}>
            {this.state.quote}
          </Text>
        </View>
        <View style={styles.subTimerContainer} />
        <View style={styles.timelineContainer}>
          <View style={styles.clockContainer}>
            <Text style={styles.time}>{this.state.startTime}</Text>
            <Text style={styles.time}>{this.state.endTime}</Text>
          </View>
          <View style={styles.timelineProgressContainer}>
            <Animated.View style={timelineProgress} />
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.timeList}
          renderItem={item => this.renderTime(item)}
          data={this.state.times}
        />
        <TouchableOpacity style={styles.saveContainer} onPress={item => this.onPressNew()}>
          <Text style={styles.new}>NEW</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  title: { fontSize: 30, fontWeight: '800', color: 'white' },
  timerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  timerTime: { fontSize: 20, fontWeight: '400', color: 'white' },
  subTimerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  timelineContainer: { flexDirection: 'column' },
  clockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  time: { fontSize: 10, fontWeight: '200', color: 'white' },
  duration: { fontSize: 10, fontWeight: '800', color: 'white', marginTop: 10 },
  timeTitle: { fontSize: 15, fontWeight: '800', color: 'white', marginTop: 40 },
  timeQuote: {
    fontSize: 15,
    fontWeight: '100',
    width: '70%',
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  timelineProgressContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 4,
    marginTop: 5
  },
  timeList: { paddingTop: 20, marginBottom: 60 },
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
  new: { fontSize: 30, fontWeight: '800', color: 'black' },
  timeContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    backgroundColor: 'black',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timeContentContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeLabel: { fontSize: 20, fontWeight: '300', color: 'white', width: 60 },
  radial: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'white',
    borderWidth: 5
  },
  radialContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  seperator: {
    backgroundColor: 'white',
    height: '100%',
    width: 1,
    marginLeft: 20,
    marginRight: 20
  },
  detailContainer: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  timeTitleLabel: { fontSize: 15, fontWeight: '600', color: 'white' },
  timeDurationLabel: {
    fontSize: 10,
    fontWeight: '200',
    color: 'white',
    marginTop: 5
  },
  timeSelect: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: 'white',
    borderWidth: 3
  }
})

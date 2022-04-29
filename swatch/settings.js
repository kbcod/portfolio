import React, { Component } from 'react'
import { Platform, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native'

const imgs = {
  light: require('./img/theme-light.png'),
  dark: require('./img/theme-dark.png'),
  close: require('./img/close.png')
}
type Props = {}
export default class Settings extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light', // light/dark
      reminders: true,
      badge: true,
      time: 12
    }
  }

  onPressTheme = theme => {
    this.setState({ theme })
  }

  onPressReminders = reminders => {
    this.setState({ reminders })
  }

  onPressBadge = badge => {
    this.setState({ badge })
  }

  onPressTime = time => {
    this.setState({ time })
  }

  onPressClose = () => {}

  render() {
    return (
      <View style={this.state.theme == 'light' ? styles.containerLight : styles.containerDark}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressClose()}>
            <Image style={this.state.theme == 'dark' ? { tintColor: 'white' } : null} source={imgs.close} />
          </TouchableOpacity>
          <Text style={this.state.theme == 'light' ? styles.titleLight : styles.titleDark}>SETTINGS</Text>
          <View />
        </View>
        <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>
            THEME
          </Text>
          <TouchableOpacity style={styles.optionContainer} onPress={() => this.onPressTheme('dark')}>
            {this.state.theme == 'dark' ? <View style={styles.select} /> : null}
            <Image style={this.state.theme == 'dark' ? { tintColor: 'white' } : null} source={imgs.dark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => this.onPressTheme('light')}>
            {this.state.theme == 'light' ? <View style={styles.select} /> : null}
            <Image style={this.state.theme == 'dark' ? { tintColor: 'white' } : null} source={imgs.light} />
          </TouchableOpacity>
          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>
            GENERAL
          </Text>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => this.onPressReminders(!this.state.reminders)}>
            {this.state.reminders ? <View style={styles.select} /> : null}
            <Text style={this.state.theme == 'light' ? styles.optionLight : styles.optionDark}>
              REMINDERS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => this.onPressBadge(!this.state.badge)}>
            {this.state.badge ? <View style={styles.select} /> : null}
            <Text style={this.state.theme == 'light' ? styles.optionLight : styles.optionDark}>
              APP BADGE
            </Text>
          </TouchableOpacity>

          <Text style={this.state.theme == 'light' ? styles.subHeaderLight : styles.subHeaderDark}>TIME</Text>
          <TouchableOpacity style={styles.optionContainer} onPress={() => this.onPressTime(12)}>
            {this.state.time == 12 ? <View style={styles.select} /> : null}
            <Text style={this.state.theme == 'light' ? styles.optionLight : styles.optionDark}>12:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => this.onPressTime(24)}>
            {this.state.time == 24 ? <View style={styles.select} /> : null}
            <Text style={this.state.theme == 'light' ? styles.optionLight : styles.optionDark}>24:00</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
    flex: 1,
    textAlign: 'center',
    color: '#9D9D9D',
    fontSize: 15,
    fontWeight: '200',
    marginTop: 50
  },
  subHeaderDark: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '200',
    marginTop: 50
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionLight: {
    textAlign: 'center',
    color: 'black',
    fontSize: 13,
    fontWeight: '500'
  },
  optionDark: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '500'
  },
  select: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#50FBFE',
    marginRight: 10
  }
})

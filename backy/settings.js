import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList, TextInput } from 'react-native'

const imgs = {
  back: require('./img/location-back.png')
}

export default class Settings extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      settings: [
        {
          type: 'header',
          text: 'Name'
        },
        {
          type: 'input',
          text: 'First Name'
        },
        {
          type: 'input',
          text: 'Last Name'
        },
        {
          type: 'header',
          text: 'Account'
        },
        {
          type: 'input',
          text: 'Username'
        },
        {
          type: 'input',
          text: 'E-Mail'
        },
        {
          type: 'input',
          text: 'Phone'
        },
        {
          type: 'input',
          text: 'Password'
        },
        {
          type: 'input',
          text: 'Repeat Password'
        },
        {
          type: 'header',
          text: 'Location'
        },
        {
          type: 'input',
          text: 'Country'
        },
        {
          type: 'input',
          text: 'City'
        }
      ]
    }
  }

  onSubmitSetting = setting => {}

  onPressBack = () => {}

  onPressDone = () => {}

  renderSettingsRow = setting => {
    switch (setting.item.type) {
      case 'header':
        return <Text style={styles.settingHeader}>{setting.item.text}</Text>
        break
      case 'input':
        return (
          <TextInput
            style={styles.settingInput}
            placeholder={setting.item.text}
            onSubmitEditing={event => this.onSubmitSetting(setting.item.text)}
          />
        )
        break
      default:
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
          <Text style={styles.title}>SETTINGS</Text>
          <TouchableOpacity onPress={() => this.onPressDone()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.settingsList}
          renderItem={item => this.renderSettingsRow(item)}
          data={this.state.settings}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 10
  },
  back: { width: 25, height: 20, paddingLeft: 10 },
  title: { fontSize: 15, fontWeight: '600', color: '#4D4D4F' },
  done: { fontSize: 15, fontWeight: '600', color: '#FE5050' },
  seperator: {
    flexDirection: 'row',
    backgroundColor: '#DBDBDC',
    width: '100%',
    height: 1,
    marginTop: 10
  },
  settingsList: { flex: 1, padding: 10, marginBottom: 20 },
  settingHeader: {
    color: '#4D4D4F',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15
  },
  settingInput: {
    width: '100%',
    height: 50,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingLeft: 10
  }
})

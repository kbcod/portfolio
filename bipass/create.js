import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, TextInput, FlatList } from 'react-native'

const imgs = {
  close: require('./img/close.png')
}

export default class Create extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      theme: [
        { color: '#FFFFFF' },
        { color: '#00A9FF' },
        { color: '#F303FF' },
        { color: '#FFFA00' },
        { color: '#2DFF00' },
        { color: '#FF0000' }
      ]
    }
  }

  onPressClose = () => {}

  onPressTheme = () => {}

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
          <Text style={styles.title}>NEW AGENDA</Text>
          <View />
        </View>
        <View />
        <Text style={styles.heading}>Title</Text>
        <TextInput
          placeholder="What would you like to name this agenda?"
          placeholderTextColor="lightgray"
          textAlign="center"
          style={styles.input}
        />
        <View style={styles.line} />
        <Text style={styles.heading}>Theme</Text>
        <FlatList
          horizontal={true}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.themeList}
          renderItem={item => this.renderTheme(item)}
          data={this.state.theme}
        />
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
  themeList: { flex: 1, marginTop: 20 },
  theme: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 17.5,
    borderWidth: 3,
    marginRight: 10
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

import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
export default class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{ brand: 'VISA', numbers: '8842' }, { brand: 'MASTERCARD', numbers: '3576' }]
    }
  }

  onPressSave = () => {}

  onPressCard = card => {}

  renderCard = card => {
    return (
      <TouchableOpacity style={styles.card} onPress={item => this.onPressCard(card.item)}>
        <Text style={styles.brand}>{card.item.brand}</Text>
        <View style={styles.numbers}>
          <Text style={styles.number}>**** </Text>
          <Text style={styles.number}>**** </Text>
          <Text style={styles.number}>**** </Text>
          <Text style={styles.number}>{card.item.numbers}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.question}>What do you want to budget?</Text>
        <TextInput placeholder="TITLE" placeholderTextColor="white" style={styles.input} />
        <View style={styles.inputSeperator} />
        <Text style={styles.question}>How much will you spend a month?</Text>
        <TextInput placeholder="AMOUNT" placeholderTextColor="white" style={styles.input} />
        <View style={styles.inputSeperator} />
        <Text style={styles.question}>Select source of funds</Text>
        <View style={styles.cardsContainer}>
          <FlatList
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.cardsList}
            renderItem={item => this.renderCard(item)}
            data={this.state.cards}
          />
        </View>
        <TouchableOpacity onPress={() => this.onPressSave()} style={styles.saveButtonContainer}>
          <Text style={styles.save}>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#2AEFAE', flex: 1, padding: 20, paddingTop: 50 },
  question: {
    fontWeight: '700',
    color: '#11808F'
  },
  save: {
    height: 30,
    fontWeight: '800',
    fontSize: 20,
    color: '#2AEFAE',
    textAlign: 'center'
  },
  input: {
    height: 70,
    fontSize: 25,
    fontWeight: '800',
    color: 'white'
  },
  inputSeperator: {
    height: 2,
    backgroundColor: 'white',
    opacity: 1,
    marginBottom: 70
  },
  cardsContainer: { marginTop: 30 },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginRight: 10,
    height: 130,
    justifyContent: 'space-between'
  },
  brand: {
    color: '#81A8DE',
    fontWeight: '700'
  },
  number: {
    color: '#676767',
    fontSize: 10,
    fontWeight: '600'
  },
  numbers: {
    width: 190,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saveButtonContainer: {
    width: '70%',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 40,
    alignSelf: 'center',
    borderRadius: 5
  }
})

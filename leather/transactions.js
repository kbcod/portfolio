import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'

const imgs = {
  wallet: require('./img/wallet.png'),
  search: require('./img/search.png'),
  send: require('./img/send.png'),
  receive: require('./img/receive.png')
}

type Props = {}

export default class Transactions extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      balance: 4.8,
      usd: 1020,
      currency: 'LTC',
      transactions: [
        {
          type: 'Received',
          amount: 1.05,
          time: '30m',
          address: 'aZu7RnM7OlBf58QHfeTn4PjNWmLO2iU',
          status: 'Pending'
        },
        {
          type: 'Received',
          amount: 0.1,
          time: '1h',
          address: 'kgHUkN457NvdkPpuewQec924OncrjiK1nO',
          status: 'Completed'
        },
        {
          type: 'Received',
          amount: 2.5,
          time: '1h',
          address: 'rTY6HnwbiNwoQl0pLsnW5njs31SjwnQoFm',
          status: 'Completed'
        },
        {
          type: 'Received',
          amount: 1.15,
          time: '1d',
          address: 'xiQpdhEofj53DKjxOW9KbGA8PknVAh2Mwi',
          status: 'Completed'
        },
        {
          type: 'Sent',
          amount: 3.1,
          time: '5d',
          address: '1NmWpkc54LnwbRuenwQplxNWiO294HwbW',
          status: 'Pending'
        }
      ]
    }
  }

  onPressSearch = () => {}

  onPressTransaction = () => {}

  onPressSend = () => {}

  onPressReceive = () => {}

  renderTransaction = transaction => {
    return (
      <TouchableOpacity
        onPress={() => this.onPressTransaction()}
        style={[
          styles.transactionContainer,
          transaction.index == this.state.transactions.length - 1 ? { borderBottomWidth: 0 } : null
        ]}>
        <View style={styles.infoContainer}>
          <Text style={styles.amount}>
            {transaction.item.type} {transaction.item.amount.toFixed(2)} {this.state.currency}
          </Text>
          <Text style={styles.time}>{transaction.item.time}</Text>
        </View>
        <Text style={styles.address}>- {transaction.item.address}</Text>
        <Text style={styles.status}>{transaction.item.status}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.wallet} source={imgs.wallet} />
          <Text style={styles.balance}>
            {this.state.balance.toFixed(2)} {this.state.currency} ={' '}
            <Text style={styles.dollar}>${this.state.usd.toFixed(2)}</Text>
          </Text>
          <TouchableOpacity onPress={() => this.onPressSearch()} style={styles.search}>
            <Image source={imgs.search} />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.transactionsContainer}
          style={styles.transactionsList}
          data={this.state.transactions}
          extraData={this.state}
          keyExtractor={index => JSON.stringify(index)}
          renderItem={(item, index) => this.renderTransaction(item)}
        />
        <View style={styles.seperator} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.onPressSend()} style={styles.button}>
              <Image source={imgs.send} />
            </TouchableOpacity>
            <Text style={styles.buttonText}>SEND</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.onPressReceive()} style={styles.button}>
              <Image source={imgs.receive} />
            </TouchableOpacity>
            <Text style={styles.buttonText}>RECEIVE</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#6969FF',
    padding: 20,
    paddingBottom: 40
  },
  wallet: {
    marginTop: 20,
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }]
  },
  balance: {
    marginTop: 15,
    color: 'white',
    fontSize: 20,
    fontWeight: '800'
  },
  dollar: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400'
  },
  search: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 25,
    marginBottom: 45
  },
  transactionsList: {
    width: '100%'
  },
  transactionsContainer: {},
  transactionContainer: {
    padding: 15,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 1
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  address: {
    color: '#515151',
    fontWeight: '200',
    marginTop: 5
  },
  status: {
    color: '#6969FF',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 5
  },
  amount: {
    color: '#515151',
    fontWeight: '600'
  },
  time: {
    color: '#A8A8A8',
    fontSize: 12,
    fontWeight: '400'
  },
  seperator: {
    width: '100%',
    height: 1,
    borderTopColor: '#E7E7E7',
    borderTopWidth: 1
  },
  buttonsContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    marginTop: 10
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#A8A8A8',
    fontWeight: '500'
  }
})

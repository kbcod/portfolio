import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, TextInput } from 'react-native'

const imgs = {
  menu: require('./img/menu.png'),
  search: require('./img/search-icon.png')
}

export default class Wallets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wallets: [
        {
          symbol: 'ADA',
          name: 'Cardano',
          amount: 1.25,
          orders: 0.25
        },
        {
          symbol: 'AST',
          name: 'Airswap',
          amount: 0.0,
          orders: 6.8
        },
        {
          symbol: 'BNT',
          name: 'Bancor',
          amount: 0.0,
          orders: 0.0
        },
        {
          symbol: 'DASH',
          name: 'Dash',
          amount: 0.0,
          orders: 0.0
        },
        {
          symbol: 'ETH',
          name: 'Ethereum',
          amount: 7.5,
          orders: 1.0
        },
        {
          symbol: 'LTC',
          name: 'Litecoin',
          amount: 1.24,
          orders: 0.05
        },
        {
          symbol: 'NEO',
          name: 'Neo',
          amount: 2.25,
          orders: 0.8
        },
        {
          symbol: 'OAX',
          name: 'Oax',
          amount: 100.55,
          orders: 8.93
        },
        {
          symbol: 'QTUM',
          name: 'Qtum',
          amount: 3.19,
          orders: 2.08
        },
        {
          symbol: 'SNT',
          name: 'Status',
          amount: 2341.24,
          orders: 200.52
        },
        {
          symbol: 'VEN',
          name: 'VeChain',
          amount: 78.38,
          orders: 90.42
        }
      ]
    }
  }

  onPressMenu = () => {}

  onPressWallet = wallet => {}

  renderWallet = wallet => {
    return (
      <TouchableOpacity onPress={() => this.onPressWallet(wallet.item)} style={styles.walletContainer}>
        <View style={styles.coinContainer}>
          <Text style={styles.symbol}>{wallet.item.symbol}</Text>
          <Text style={styles.name}>{wallet.item.name}</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{wallet.item.amount.toFixed(6)}</Text>
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.changeTextContainer}>
            <Text style={styles.order}>{wallet.item.orders.toFixed(6)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressMenu()} style={styles.menu}>
            <Image source={imgs.menu} />
          </TouchableOpacity>
          <Text style={styles.title}>WALLETS</Text>
          <View style={styles.empty} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={imgs.search} />
          <TextInput placeholder="Search" placeholderTextColor="#8E8E93" style={styles.input} />
        </View>
        <View style={styles.coinsHeadersContainer}>
          <Text style={styles.header}>CURRENCY</Text>
          <Text style={styles.header}>AVAILABLE</Text>
          <Text style={styles.header}>ORDERS</Text>
        </View>
        <FlatList
          key={'wallets'}
          extraData={this.state}
          contentContainerStyle={styles.walletsList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          data={this.state.wallets}
          renderItem={item => this.renderWallet(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#060A10', flex: 1, padding: 20 },
  headerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menu: {},
  title: { color: 'white', fontSize: 20, fontWeight: '800' },
  inputContainer: {
    alignSelf: 'center',
    backgroundColor: '#161920',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    marginTop: 15
  },
  input: {
    flex: 1,
    color: 'white',
    paddingLeft: 10
  },
  coinsHeadersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 10
  },
  header: {
    fontSize: 12,
    color: 'lightgray',
    fontWeight: '100'
  },
  walletsList: {
    marginTop: 20
  },
  walletContainer: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  coinContainer: {
    width: '30%',
    flexDirection: 'column'
  },
  symbol: {
    color: 'white',
    fontWeight: '600'
  },
  name: {
    color: 'lightgray',
    fontWeight: '200'
  },
  amountContainer: {
    width: '30%'
  },
  amount: {
    textAlign: 'right',
    color: 'white',
    fontWeight: '600'
  },
  orderContainer: {
    width: '40%',
    alignItems: 'flex-end'
  },
  order: {
    textAlign: 'right',
    color: 'white',
    fontWeight: '600'
  }
})

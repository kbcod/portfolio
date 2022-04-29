import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, TextInput } from 'react-native'

const imgs = {
  menu: require('./img/menu.png'),
  search: require('./img/search-icon.png')
}

export default class Markets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currency: 'USD',
      pair: 'BTC',
      markets: {
        BTC: [
          {
            symbol: 'ADA',
            name: 'Cardano',
            price: 0.62,
            change: -0.2
          },
          {
            symbol: 'AST',
            name: 'Airswap',
            price: 0.97,
            change: 35.0
          },
          {
            symbol: 'BNT',
            name: 'Bancor',
            price: 6.96,
            change: -5.0
          },
          {
            symbol: 'DASH',
            name: 'Dash',
            price: 791.0,
            change: -10.0
          },
          {
            symbol: 'ETH',
            name: 'Ethereum',
            price: 1024.0,
            change: -2.74
          },
          {
            symbol: 'LTC',
            name: 'Litecoin',
            price: 182.55,
            change: 4.21
          },
          {
            symbol: 'NEO',
            name: 'Neo',
            price: 138.12,
            change: -12.5
          },
          {
            symbol: 'OAX',
            name: 'Oax',
            price: 1.21,
            change: -40.0
          },
          {
            symbol: 'QTUM',
            name: 'Qtum',
            price: 52.18,
            change: 1.2
          },
          {
            symbol: 'SNT',
            name: 'Status',
            price: 0.35,
            change: -11.25
          },
          {
            symbol: 'VEN',
            name: 'VeChain',
            price: 11.38,
            change: -2.8
          }
        ],
        ETH: [
          {
            symbol: 'ADA',
            name: 'Cardano',
            price: 0.65,
            change: -0.25
          },
          {
            symbol: 'ARK',
            name: 'Ark',
            price: 4.77,
            change: 34.5
          },
          {
            symbol: 'BNT',
            name: 'Bancor',
            price: 7.0,
            change: -7.0
          },
          {
            symbol: 'BTC',
            name: 'Bitcoin',
            price: 14582,
            change: -10.5
          },
          {
            symbol: 'DASH',
            name: 'Dash',
            price: 795.0,
            change: -11.0
          },
          {
            symbol: 'KMD',
            name: 'Komodo',
            price: 4.3,
            change: 1.5
          },
          {
            symbol: 'OAX',
            name: 'Oax',
            price: 1.35,
            change: -35.0
          },
          {
            symbol: 'SALT',
            name: 'Salt',
            price: 3.79,
            change: 7.35
          },
          {
            symbol: 'SNT',
            name: 'Status',
            price: 0.45,
            change: -13.5
          },
          {
            symbol: 'WAX',
            name: 'WAX',
            price: 0.45,
            change: 12.59
          }
        ],
        LTC: [
          {
            symbol: 'ADA',
            name: 'Cardano',
            price: 0.62,
            change: -2.46
          },
          {
            symbol: 'AION',
            name: 'Aion',
            price: 2.52,
            change: 5.12
          },
          {
            symbol: 'BNT',
            name: 'Bancor',
            price: 7.23,
            change: -7.36
          },
          {
            symbol: 'BTC',
            name: 'Bitcoin',
            price: 14780,
            change: -8.21
          },
          {
            symbol: 'DASH',
            name: 'Dash',
            price: 799.2,
            change: -9.56
          },
          {
            symbol: 'ETH',
            name: 'Ethereum',
            price: 1001.25,
            change: 13.99
          },
          {
            symbol: 'KMD',
            name: 'Komodo',
            price: 4.17,
            change: 1.2
          },
          {
            symbol: 'SALT',
            name: 'Salt',
            price: 3.95,
            change: 8.99
          }
        ],
        USDT: [
          {
            symbol: 'BTC',
            name: 'Bitcoin',
            price: 15391,
            change: -9.32
          },
          {
            symbol: 'ETH',
            name: 'Ethereum',
            price: 1090.82,
            change: -3.25
          },
          {
            symbol: 'LTC',
            name: 'Litecoin',
            price: 199.65,
            change: 2.53
          }
        ]
      },
      pairs: ['BTC', 'ETH', 'LTC', 'USDT']
    }
  }

  onPressMenu = () => {}

  onPressPair = pair => {
    this.setState({ pair })
  }

  renderPair = pair => {
    return (
      <TouchableOpacity style={styles.pairContainer} onPress={item => this.onPressPair(pair.item)}>
        <Text style={[styles.pair, this.state.pair == pair.item ? { color: '#FFF231' } : null]}>
          {pair.item}
        </Text>
      </TouchableOpacity>
    )
  }

  renderMarket = market => {
    return (
      <View style={styles.marketContainer}>
        <View style={styles.coinContainer}>
          <Text style={styles.symbol}>{market.item.symbol}</Text>
          <Text style={styles.name}>{market.item.name}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {market.item.price.toFixed(2)} {this.state.currency}
          </Text>
        </View>

        <View style={styles.changeContainer}>
          <View style={styles.changeTextContainer}>
            <Text
              style={[styles.change, market.item.change > 0 ? { color: '#05A944' } : { color: '#FF675E' }]}>
              {market.item.change > 0 ? <Text>+</Text> : null}
              {market.item.change.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressMenu()} style={styles.menu}>
            <Image source={imgs.menu} />
          </TouchableOpacity>
          <Text style={styles.trade}>MARKETS</Text>
          <View style={styles.empty} />
        </View>

        <View style={styles.pairContainer}>
          <FlatList
            key={'pairs'}
            showsHorizontalScrollIndicator={false}
            extraData={this.state}
            horizontal={true}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderPair(item)}
            data={this.state.pairs}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={imgs.search} />
          <TextInput placeholder="Search" placeholderTextColor="#8E8E93" style={styles.input} />
        </View>
        <View style={styles.coinsHeadersContainer}>
          <Text style={styles.header}>CURRENCY</Text>
          <Text style={styles.header}>PRICE</Text>
          <Text style={styles.header}>24H</Text>
        </View>
        <FlatList
          key={'markets'}
          extraData={this.state}
          contentContainerStyle={styles.marketsList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          data={this.state.markets[this.state.pair]}
          renderItem={item => this.renderMarket(item)}
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
  trade: { color: 'white', fontSize: 20, fontWeight: '800' },
  inputContainer: {
    alignSelf: 'center',
    backgroundColor: '#161920',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10
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
  pairContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pair: {
    color: 'white',
    fontWeight: '800'
  },
  marketsList: {
    marginTop: 20
  },
  marketContainer: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  coinContainer: {
    width: '33%',
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
  priceContainer: {
    width: '33%'
  },
  price: {
    textAlign: 'right',
    color: 'white',
    fontWeight: '600'
  },
  changeContainer: {
    width: '33%',
    alignItems: 'flex-end'
  },
  changeTextContainer: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 2.5,
    paddingRight: 2.5,
    backgroundColor: 'white',
    borderRadius: 3
  },
  change: {
    fontSize: 12,
    fontWeight: '500'
  }
})

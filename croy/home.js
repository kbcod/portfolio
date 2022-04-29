import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, TextInput } from 'react-native'

const imgs = {
  ETH: require('./img/ethereum.png'),
  menu: require('./img/menu.png')
}

const Y_ROWS = 10

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      book: 'ORDERS',
      coin: 'ADA',
      pair: 'ETH',
      coins: ['ADA', 'AST', 'BNT', 'DASH', 'ETH', 'NEO', 'OAX', 'QTUM', 'SNT', 'VEN'],
      buys: [
        [0.01, 0.208],
        [0.55, 0.2095],
        [0.01, 0.21],
        [0.55, 0.2105],
        [0.01, 0.211],
        [0.55, 0.219],
        [0.01, 0.22],
        [0.55, 0.261],
        [0.01, 0.277],
        [0.55, 0.2775],
        [0.01, 0.278],
        [0.55, 0.279],
        [0.01, 0.28],
        [0.55, 0.281]
      ],
      sells: [
        [0.11, 0.2835],
        [0.45, 0.284],
        [0.51, 0.2845],
        [0.35, 0.285],
        [0.31, 0.291],
        [0.35, 0.292],
        [0.51, 0.294],
        [0.15, 0.298],
        [0.14, 0.299],
        [0.25, 0.2995],
        [0.51, 0.301],
        [0.15, 0.3015],
        [0.11, 0.302]
      ],
      chart: [
        [0.208, 0.23],
        [0.23, 0.21],
        [0.21, 0.27],
        [0.27, 0.209],
        [0.209, 0.22],
        [0.22, 0.24],
        [0.24, 0.285],
        [0.285, 0.298],
        [0.298, 0.241],
        [0.241, 0.21],
        [0.21, 0.23],
        [0.23, 0.275],
        [0.275, 0.289],
        [0.289, 0.245]
      ],
      price: -0.2815,
      pairs: ['BTC', 'ETH', 'LTC', 'USDT'],
      xAxis: ['9:40', '9:45', '9:50']
    }
  }

  componentWillMount() {
    var yMin
    var yMax

    var sales = this.state.buys.concat(this.state.sells)

    for (var x in sales) {
      var price = sales[x][1]

      if (price < yMin || yMin == undefined) {
        yMin = price
      }

      if (price > yMax || yMax == undefined) {
        yMax = price
      }
    }

    this.setState({ yMin })
    this.setState({ yMax })

    var yAxis = []
    var range = yMax - yMin
    var interval = range / Y_ROWS

    yAxis.push(yMin)
    for (var i = 1; i < Y_ROWS; i++) {
      yAxis.push(yMin + i * interval)
    }
    yAxis.push(yMax)
    yAxis.reverse()

    this.setState({ yAxis })
  }

  onPressMenu = () => {}

  onPressCoin = coin => {
    this.setState({ coin })
  }

  onPressPair = pair => {
    this.setState({ pair })
  }

  onPressBook = () => {
    if (this.state.book == 'ORDERS') {
      this.setState({ book: 'TRADES' })
    } else {
      this.setState({ book: 'ORDERS' })
    }
  }

  onPressSell = () => {}

  onPressBuy = () => {}

  renderCoin = coin => {
    return (
      <TouchableOpacity style={styles.coinContainer} onPress={item => this.onPressCoin(coin.item)}>
        <Text style={[styles.coin, this.state.coin == coin.item ? { color: 'white' } : null]}>
          {coin.item}
        </Text>
        {this.state.coin == coin.item ? <View style={styles.coinActive} /> : null}
      </TouchableOpacity>
    )
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

  renderBuy = buy => {
    return (
      <View style={styles.saleContainer}>
        <Text style={styles.price}>{buy.item[0]}</Text>
        <Text style={styles.buy}>{buy.item[1]}</Text>
      </View>
    )
  }

  renderSell = sell => {
    return (
      <View style={styles.saleContainer}>
        <Text style={styles.price}>{sell.item[0]}</Text>
        <Text style={styles.sell}>{sell.item[1]}</Text>
      </View>
    )
  }

  renderYAxis = axis => {
    return <Text style={styles.axis}>{axis.item.toFixed(4)}</Text>
  }

  renderXAxis = axis => {
    return <Text style={styles.axis}>{axis.item}</Text>
  }

  renderChartBackground = () => {
    var lines = []

    for (var i = 0; i < Y_ROWS; i++) {
      lines.push(<View key={i} style={styles.chartLine} />)
    }

    return lines
  }

  renderStick = stick => {
    var plot = stick.item

    var change = plot[1] - plot[0]
    var raise = change > 0 ? true : false
    var range = this.state.yMax - this.state.yMin
    var padderHeightNum = range - Math.abs(change)
    var padderHeightPerc = JSON.stringify(padderHeightNum * 1000) + '%'
    var barHeightNum = Math.abs(change) / range
    var barHeightPerc = JSON.stringify(barHeightNum * 110) + '%'

    return (
      <View style={styles.stickContainer}>
        <View style={{  width: 3, height: padderHeightPerc }} />
        <View style={{ backgroundColor: raise ? 'green' : 'red', width: 3, height: barHeightPerc }} />
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
          <Text style={styles.trade}>TRADE</Text>
          <View style={styles.empty} />
        </View>

        <View style={styles.coinsContainer}>
          <FlatList
            key={'coins'}
            showsHorizontalScrollIndicator={false}
            extraData={this.state}
            horizontal={true}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderCoin(item)}
            data={this.state.coins}
          />
        </View>
        <View style={styles.seperator} />
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
        <View style={styles.tradeContainer}>
          <View style={styles.bookContainer}>
            <View style={styles.symbolContainer}>
              <Image style={styles.symbol} source={imgs[this.state.pair]} />
            </View>
            <TouchableOpacity onPress={item => this.onPressBook()}>
              <Text style={styles.book}>{this.state.book}</Text>
            </TouchableOpacity>
            <View style={styles.buysContainer}>
              <FlatList
                style={styles.orderList}
                keyExtractor={(item, index) => JSON.stringify(index)}
                showsVerticalScrollIndicator={false}
                data={this.state.buys}
                renderItem={item => this.renderBuy(item)}
              />
            </View>
            <View style={styles.liveContainer}>
              <Text style={[styles.live, this.state.price < 0 ? { color: '#FF675E' } : { color: '#05A944' }]}>
                {Math.abs(this.state.price)}
              </Text>
            </View>
            <View style={styles.sellsContainer}>
              <FlatList
                style={styles.orderList}
                keyExtractor={(item, index) => JSON.stringify(index)}
                showsVerticalScrollIndicator={false}
                data={this.state.sells}
                renderItem={item => this.renderSell(item)}
              />
            </View>
          </View>
          <View style={styles.orderContainer}>
            <View style={styles.chartContainer}>
              <View style={styles.chartTopContainer}>
                <View style={styles.chartSticksContainer}>
                  <View style={styles.chartSticksBackgroundContainer}>{this.renderChartBackground()}</View>
                  <View style={styles.sticksContainer}>
                    <FlatList
                      key={'sticks'}
                      showsHorizontalScrollIndicator={false}
                      extraData={this.state}
                      horizontal={true}
                      keyExtractor={(item, index) => JSON.stringify(index)}
                      renderItem={item => this.renderStick(item)}
                      data={this.state.chart}
                    />
                  </View>
                </View>
                <View style={styles.chartYContainer}>
                  <FlatList
                    scrollEnabled={false}
                    contentContainerStyle={styles.yAxisList}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                    showsVerticalScrollIndicator={false}
                    data={this.state.yAxis}
                    renderItem={item => this.renderYAxis(item)}
                  />
                </View>
                <View style={styles.coinsContainer} />
              </View>
              <View style={styles.chartBottomContainer}>
                <FlatList
                  scrollEnabled={false}
                  horizontal={true}
                  contentContainerStyle={styles.xAxisList}
                  keyExtractor={(item, index) => JSON.stringify(index)}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.xAxis}
                  renderItem={item => this.renderXAxis(item)}
                />
              </View>
            </View>
            <View style={styles.buySellContainer}>
              <View style={styles.sellContainer}>
                <Text style={styles.total}>0.4000 ETH</Text>
                <Text style={styles.balance}>BALANCE</Text>
                <TextInput
                  placeholder={JSON.stringify(this.state.yMin) + ' ' + this.state.pair}
                  placeholderTextColor={'#44474B'}
                  style={styles.input}
                />
                <TouchableOpacity onPress={() => this.onPressSell()} style={styles.sellButton}>
                  <Text style={styles.button}>SELL</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buyContainer}>
                <Text style={styles.total}>0.1000 BTC</Text>
                <Text style={styles.balance}>BALANCE</Text>
                <TextInput
                  placeholder={JSON.stringify(this.state.yMax) + ' ' + this.state.pair}
                  placeholderTextColor={'#44474B'}
                  style={styles.input}
                />
                <TouchableOpacity onPress={() => this.onPressBuy()} style={styles.buyButton}>
                  <Text style={styles.button}>BUY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#060A10', flex: 1, paddingTop: 20 },
  headerContainer: {
    height: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  menu: {},
  trade: { color: 'white', fontSize: 20, fontWeight: '800' },
  empty: {},
  coinsContainer: {
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  coinContainer: {
    margin: 5,
    marginRight: 20,
    alignItems: 'center'
  },
  coin: {
    color: '#44474B',
    fontWeight: '800'
  },
  coinActive: {
    marginTop: 10,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'red'
  },
  seperator: {
    backgroundColor: 'white',
    height: 1.5,
    width: '50%',
    alignSelf: 'center'
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
  tradeContainer: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: '#232A35',
    borderTopWidth: 1
  },
  bookContainer: {
    width: '30%',
    borderRightColor: '#232A35',
    borderRightWidth: 1
  },
  orderContainer: {
    width: '75%',
    flexDirection: 'column'
  },
  chartContainer: {
    height: '65%',
    flexDirection: 'column'
  },
  buySellContainer: {
    flexDirection: 'row',
    height: '30%',
    padding: 20,
    marginTop: 10
  },
  total: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500'
  },
  balance: {
    color: '#44474B',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 5
  },
  buyContainer: {
    width: '50%'
  },
  sellContainer: {
    width: '50%'
  },
  buyButton: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05A944',
    borderRadius: 5,
    padding: 5,
    marginTop: 20
  },
  sellButton: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF675E',
    borderRadius: 5,
    padding: 5,
    marginTop: 20
  },
  input: {
    fontSize: 10,
    textAlign: 'center',
    width: '80%',
    borderColor: 'white',
    color: 'white',
    borderRadius: 3,
    borderWidth: 2,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10
  },
  chartTopContainer: {
    flexDirection: 'row'
  },
  chartBottomContainer: {},
  chartSticksBackgroundContainer: {
    position: 'absolute',
    flexDirection: 'column',
    width: '100%'
  },
  sticksContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  stickContainer: {
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 8,
    bottom: 30
  },
  chartLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginBottom: 30
  },
  chartSticksContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#232A35',
    borderWidth: 1
  },
  chartYContainer: {
    flexDirection: 'row'
  },
  yAxisList: {
    marginLeft: 10
  },
  xAxisList: {
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 10
  },
  axis: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
    paddingBottom: 15
  },
  symbolContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  symbol: {
    marginTop: 10
  },
  book: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '800'
  },
  buysContainer: {
    height: '35%'
  },
  orderList: {
    padding: 15,
    paddingTop: 0,
    marginTop: 10
  },
  saleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  live: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 3,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  price: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600'
  },
  buy: {
    color: '#05A944',
    fontSize: 10,
    fontWeight: '600'
  },
  sell: {
    color: '#FF675E',
    fontSize: 10,
    fontWeight: '600'
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600'
  },
  liveContainer: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sellsContainer: {
    height: '35%'
  }
})

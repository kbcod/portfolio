import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, FlatList } from 'react-native'

const imgs = {
  back: require('./img/back.png')
}

type Props = {}
export default class Transaction extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      coin: 'ADA',
      tab: 0,
      address: 't3jA83N85VnHyT40JBcEynbUok81WcgF4gJkoP',
      deposits: [
        {
          amount: 9.0,
          time: '01-20-2018   10:20'
        },
        {
          amount: 1.1,
          time: '01-17-2018   14:20'
        },
        {
          amount: 2.25,
          time: '01-15-2018   11:40'
        },
        {
          amount: 0.8,
          time: '01-11-2018   02:20'
        },
        {
          amount: 0.44,
          time: '01-11-2018   01:00'
        },
        {
          amount: 0.051,
          time: '01-10-2018   15:10'
        },
        {
          amount: 1.0,
          time: '01-03-2018   10:05'
        },
        {
          amount: 1.0,
          time: '01-02-2018   1:00'
        }
      ]
    }
  }

  componentWillMount() {
    this.setState({
      code: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${this.state.address}"`
    })
  }

  onPressBack = () => {}

  onPressTab = tab => {
    this.setState({ tab })
  }

  onPressAddress = () => {}

  onPressDeposit = () => {}

  onPressSubmit = () => {}

  renderDeposit = deposit => {
    return (
      <TouchableOpacity onPress={() => this.onPressDeposit(deposit.item)} style={styles.depositContainer}>
        <View style={styles.coinContainer}>
          <Text style={styles.symbol}>{this.state.coin}</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.detail}>{deposit.item.amount.toFixed(6)}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.detail}>{deposit.item.time}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderDeposits() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>ADDRESS</Text>
        <TouchableOpacity onPress={() => this.onPressAddress()} style={styles.addressContainer}>
          <Text style={styles.address}>{this.state.address}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>QR CODE</Text>
        <TouchableOpacity onPress={() => this.onPressAddress()} style={styles.qrContainer}>
          <Image style={styles.qr} source={{ uri: this.state.code }} />
        </TouchableOpacity>
        <Text style={styles.header}>HISTORY</Text>
        <FlatList
          key={'history'}
          extraData={this.state}
          contentContainerStyle={styles.depositsList}
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsVerticalScrollIndicator={false}
          data={this.state.deposits}
          renderItem={item => this.renderDeposit(item)}
        />
      </View>
    )
  }

  renderWithdraw() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>ADDRESS</Text>
        <View style={styles.withdrawContainer}>
          <TextInput placeholder="Withdraw Address" placeholderTextColor={'#5C5F63'} style={styles.address} />
        </View>
        <Text style={styles.header}>AMOUNT</Text>
        <View style={styles.withdrawContainer}>
          <TextInput placeholder="Amount" placeholderTextColor={'#5C5F63'} style={styles.address} />
        </View>
        <Text style={styles.header}>FEE</Text>
        <View style={[styles.withdrawContainer, { width: '30%' }]}>
          <TextInput placeholder="0.01" placeholderTextColor={'#5C5F63'} style={styles.address} />
        </View>
        <TouchableOpacity onPress={() => this.onPressSubmit()} style={styles.submitButtonContainer}>
          <Text style={styles.submit}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()} style={styles.back}>
            <Image source={imgs.back} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={item => this.onPressTab(0)}>
              <Text style={styles.navTab}>DEPOSIT</Text>
            </TouchableOpacity>
            {this.state.tab == 0 ? <View style={styles.active} /> : null}
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={item => this.onPressTab(1)}>
              <Text style={styles.navTab}>WITHDRAW</Text>
            </TouchableOpacity>
            {this.state.tab == 1 ? <View style={styles.active} /> : null}
          </View>
        </View>
        {this.state.tab == 0 ? this.renderDeposits() : this.renderWithdraw()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#060A10', flex: 1, padding: 20 },
  headerContainer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  title: { color: 'white', fontSize: 20, fontWeight: '800' },
  tabsContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10
  },
  tabContainer: {},
  navTab: { fontSize: 15, fontWeight: '500', color: '#D8D9DF' },
  active: {
    backgroundColor: 'white',
    height: 2,
    width: '100%',
    marginTop: 5
  },
  mainContainer: {
    flex: 1
  },
  header: {
    fontSize: 12,
    color: '#5C5F63',
    fontWeight: '100',
    marginTop: 25
  },
  addressContainer: {
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 3,
    marginTop: 20
  },
  address: {
    fontSize: 10,
    color: 'white',
    fontWeight: '300',
    textAlign: 'center'
  },
  qrContainer: {
    marginTop: 20
  },
  qr: {
    width: 200,
    height: 200,
    padding: 20,
    backgroundColor: 'white'
  },
  depositsList: {
    marginTop: 20
  },
  depositContainer: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  coinContainer: {
    width: '30%',
    flexDirection: 'column'
  },
  symbol: {
    color: '#5C5F63',
    fontWeight: '200'
  },
  detail: {
    color: 'white',
    fontWeight: '400'
  },
  amountContainer: {
    width: '30%'
  },
  dateContainer: {
    width: '40%'
  },
  withdrawContainer: {
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 3,
    marginTop: 20
  },
  submit: {
    fontWeight: '600',
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  submitButtonContainer: {
    width: '60%',
    backgroundColor: '#1C1F23',
    padding: 10,
    marginTop: 60,
    alignSelf: 'center',
    borderRadius: 4
  }
})

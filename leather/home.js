import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'

const imgs = {
  wallet: require('./img/wallet.png'),
  delete: require('./img/delete.png')
}

type Props = {}

const PIN_COUNT = 6

export default class Home extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      tab: 0,
      keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '  ', '0', 'X'],
      code: []
    }
  }

  onPressTab = tab => {
    this.setState({ tab })
  }

  onPressKey = key => {
    var code = this.state.code

    if (key == 'X') {
      code.pop()
    } else {
      if (code.length < PIN_COUNT) {
        code.push(key)
      }
    }

    this.setState({ code })
  }

  renderKey = key => {
    return (
      <TouchableOpacity onPress={() => this.onPressKey(key.item)} style={styles.keyContainer}>
        {key.item == 'X' ? <Image source={imgs.delete} /> : <Text style={styles.key}>{key.item}</Text>}
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={item => this.onPressTab(0)}>
              <Text style={styles.navTab}>WALLET</Text>
            </TouchableOpacity>
            {this.state.tab == 0 ? <View style={styles.active} /> : null}
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={item => this.onPressTab(1)}>
              <Text style={styles.navTab}>ADDRESS</Text>
            </TouchableOpacity>
            {this.state.tab == 1 ? <View style={styles.active} /> : null}
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={item => this.onPressTab(2)}>
              <Text style={styles.navTab}>SCAN</Text>
            </TouchableOpacity>
            {this.state.tab == 2 ? <View style={styles.active} /> : null}
          </View>
        </View>

        <View style={styles.walletContainer}>
          <Image source={imgs.wallet} />
          <View style={styles.pinContainer}>
            <View style={styles.pinsContainer}>
              <View style={[styles.pin, this.state.code.length >= 1 ? { backgroundColor: 'white' } : null]} />
              <View style={[styles.pin, this.state.code.length >= 2 ? { backgroundColor: 'white' } : null]} />
              <View style={[styles.pin, this.state.code.length >= 3 ? { backgroundColor: 'white' } : null]} />
              <View style={[styles.pin, this.state.code.length >= 4 ? { backgroundColor: 'white' } : null]} />
              <View style={[styles.pin, this.state.code.length >= 5 ? { backgroundColor: 'white' } : null]} />
              <View style={[styles.pin, this.state.code.length >= 6 ? { backgroundColor: 'white' } : null]} />
            </View>
            <Text style={styles.prompt}>Enter Pin</Text>
          </View>
        </View>

        <FlatList
          scrollEnabled={false}
          numColumns={3}
          contentContainerStyle={styles.inputContainer}
          style={styles.inputList}
          data={this.state.keys}
          extraData={this.state}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={(item, index) => this.renderKey(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#6969FF'
  },
  tabsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 50
  },
  tabContainer: {},
  navTab: { fontSize: 15, fontWeight: '400', color: 'white' },
  active: {
    backgroundColor: 'white',
    height: 2,
    width: '100%',
    marginTop: 5
  },
  walletContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30%'
  },
  pinContainer: {
    marginTop: 50
  },
  prompt: {
    textAlign: 'center',
    color: 'white',
    letterSpacing: 5,
    fontSize: 11.5,
    marginTop: 10
  },
  pinsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pin: {
    width: 13,
    height: 13,
    borderColor: 'white',
    borderRadius: 6.5,
    borderWidth: 2,
    margin: 8
  },
  inputList: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  inputContainer: {},
  keyContainer: {
    flex: 1,
    alignItems: 'center',
    height: 55
  },
  key: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  }
})

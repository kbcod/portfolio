import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Slider } from 'react-native'

const imgs = {
  close: require('./img/close.png'),
  export: require('./img/export.png'),
  saturation: require('./img/saturation.png'),
  exposure: require('./img/exposure.png'),
  contrast: require('./img/contrast.png'),
  brightness: require('./img/brightness.png'),
  tint: require('./img/tint.png'),
  fade: require('./img/fade.png'),
  thumb: require('./img/thumb.png'),
  cancel: require('./img/cancel.png'),
  save: require('./img/presetSave.png')
}

const Dimensions = require('Dimensions')

type Props = {}
export default class Edit extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      filter: 'UNA',
      photo: 'https://source.unsplash.com/random',
      amount: 1,
      control: 'saturation',
      controls: ['saturation', 'exposure', 'contrast', 'brightness', 'tint', 'fade']
    }
  }

  onPressClose = () => {}

  onPressExport = () => {}

  onPressCancel = () => {}

  onPressSave = () => {}

  onPressControl = control => {
    this.setState({ control })
  }

  renderControl = control => {
    return (
      <TouchableOpacity style={styles.controlContainer} onPress={item => this.onPressControl(control.item)}>
        <Image source={imgs[control.item]} />
        {this.state.control.toUpperCase() == control.item.toUpperCase() ? (
          <View style={styles.active} />
        ) : null}
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={item => this.onPressClose()}>
            <Image source={imgs.close} />
          </TouchableOpacity>
          <Text style={styles.title}>{this.state.filter}</Text>
          <TouchableOpacity onPress={item => this.onPressExport()}>
            <Image source={imgs.export} />
          </TouchableOpacity>
        </View>
        <Image style={styles.photo} source={{ uri: this.state.photo }} />
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.controlsList}
          renderItem={item => this.renderControl(item)}
          extraData={this.state}
          data={this.state.controls}
        />
        <Text style={styles.control}>
          {this.state.control.toUpperCase()} +{this.state.amount}{' '}
        </Text>
        <View style={styles.sliderContainer}>
          <Slider
            thumbImage={imgs.thumb}
            style={styles.slide}
            step={1}
            minimumValue={1}
            maximumValue={50}
            minimumTrackTintColor={'#6E6E6E'}
            maximumTrackTintColor={'#6E6E6E'}
            value={this.state.age}
            onValueChange={amount => this.setState({ amount })}
          />
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={item => this.onPressCancel()}>
            <Image source={imgs.cancel} />
          </TouchableOpacity>
          <TouchableOpacity onPress={item => this.onPressSave()}>
            <Image source={imgs.save} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#2B2B2B',
    height: 70,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  footerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20
  },
  photo: {
    height: Dimensions.get('window').width,
    backgroundColor: 'lightgray'
  },
  controlsList: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  controlContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginTop: 10
  },
  sliderContainer: {
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  slider: {
    marginTop: 5,
    height: 2,
    backgroundColor: 'black',
    width: '90%'
  },
  control: {
    marginTop: 20,
    paddingLeft: 20,
    color: '#454545',
    fontSize: 15,
    fontWeight: '700'
  },
  slide: {
    width: '90%'
  }
})

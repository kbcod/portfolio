import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from 'react-native'

const imgs = {
  close: require('./img/close.png'),
  export: require('./img/export.png'),
  edit: require('./img/presetEdit.png')
}

const Dimensions = require('Dimensions')

type Props = {}
export default class Preset extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      slide: 5,
      photo: 'https://source.unsplash.com/random',
      filters: [
        {
          color: '#335AFE',
          name: 'FAL'
        },
        {
          color: '#33FEB9',
          name: 'UNA'
        },
        {
          color: '#FE3D33',
          name: 'LOM'
        },
        {
          color: '#FEF033',
          name: 'ENE'
        },
        {
          color: '#C733FE',
          name: 'TIN'
        }
      ],
      values: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  }

  onPressClose = () => {}

  onPressExport = () => {}

  onPressFilter = filter => {
    if (this.state.filter == filter) {
      this.setState({ filter: null })
    } else {
      this.setState({ filter })
    }
  }

  onPressSlide = slide => {
    if (this.state.slide == slide) {
      this.setState({ slide: -1 })
    } else {
      this.setState({ slide })
    }
  }

  renderFilter = filter => {
    return (
      <TouchableOpacity style={styles.filterContainer} onPress={item => this.onPressFilter(filter.item.name)}>
        <ImageBackground
          style={[
            styles.filterPhoto,
            this.state.filter == filter.item.name ? { borderColor: 'red', borderWidth: 3 } : null
          ]}
          source={{ uri: this.state.photo }}>
          {this.state.filter == filter.item.name ? <Image source={imgs.edit} /> : null}
        </ImageBackground>
        <Text style={[styles.filterName, { backgroundColor: filter.item.color }]}>{filter.item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderValue = value => {
    return (
      <TouchableOpacity onPress={() => this.onPressSlide(value.index)} style={styles.valueContainer}>
        <View
          style={[styles.valueIndicator, this.state.slide == value.index ? { borderColor: 'red' } : null]}
        />
        <Text style={styles.value}>{value.item}</Text>
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
          <TouchableOpacity onPress={item => this.onPressExport()}>
            <Image source={imgs.export} />
          </TouchableOpacity>
        </View>
        <Image style={styles.photo} source={{ uri: this.state.photo }} />
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.filtersList}
          renderItem={item => this.renderFilter(item)}
          extraData={this.state}
          data={this.state.filters}
        />
        <View style={styles.sliderContainer}>
          <View style={styles.slider} />
          <View style={styles.sliderValuesContainer}>
            <FlatList
              keyExtractor={(item, index) => JSON.stringify(index)}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              scrollEnabled={false}
              contentContainerStyle={styles.valuesList}
              renderItem={item => this.renderValue(item)}
              extraData={this.state}
              data={this.state.values}
            />
          </View>
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
  photo: {
    height: Dimensions.get('window').width,
    backgroundColor: 'lightgray'
  },
  filtersList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  filterContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterPhoto: {
    width: 60,
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterName: {
    padding: 5,
    color: 'white',
    fontWeight: '600',
    width: '100%',
    textAlign: 'center'
  },
  sliderContainer: {
    marginTop: 30,
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
  sliderValuesContainer: {
    width: '80%',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between'
  },
  valuesList: {
    width: '100%',
    justifyContent: 'space-between'
  },
  valueIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 3
  },
  value: {
    marginTop: 10,
    textAlign: 'center'
  }
})

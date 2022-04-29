import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'

const imgs = {
  photo: require('./img/create-photo.png')
}

export default class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [
        'Animals',
        'Attractions',
        'City',
        'Exploring',
        'Food',
        'Forest',
        'Kids',
        'Lifestyle',
        'Nightlife'
      ]
    }
  }

  onPressUpload = () => {}

  onPressCategory = category => {}

  onLocationTextSubmit = event => {}

  onTitleTextSubmit = event => {}

  onCostTextSubmit = event => {}

  onDistanceTextSubmit = event => {}

  onStopsTextSubmit = event => {}

  onOverviewTextSubmit = event => {}

  onInfoTextSubmit = event => {}

  renderCategory = category => {
    return (
      <TouchableOpacity style={styles.categoryButton} onPress={() => this.onPressCategory(category.item)}>
        <Text style={styles.category}>{category.item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity onPress={() => this.onPressUpload()}>
          <Image source={imgs.photo} />
        </TouchableOpacity>
        <Text style={styles.title}>Location</Text>
        <TextInput
          placeholder="1234 Travel Place"
          style={styles.input}
          onSubmitEditing={event => this.onLocationTextSubmit(event)}
        />
        <Text style={styles.title}>Category</Text>
        <View style={styles.subContainer}>
          <FlatList
            keyExtractor={(item, index) => index}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            data={this.state.categories}
            renderItem={item => this.renderCategory(item)}
          />
        </View>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Activity Title"
          onSubmitEditing={event => this.onTitleTextSubmit(event)}
        />
        <Text style={styles.title}>Details</Text>
        <View style={[styles.subContainer, styles.detailsConatiner]}>
          <TextInput
            style={styles.detailsInput}
            placeholder="Cost"
            onSubmitEditing={event => this.onCostTextSubmit(event)}
          />
          <TextInput
            style={styles.detailsInput}
            placeholder="Distance"
            onSubmitEditing={event => this.onDistanceTextSubmit(event)}
          />
        </View>
        <Text style={styles.title}>Stops</Text>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.stopsInput}
            placeholder="Stops (seperate with commas)"
            onSubmitEditing={event => this.onStopsTextSubmit(event)}
          />
        </View>
        <Text style={styles.title}>Overview</Text>
        <TextInput
          multiline={true}
          style={[styles.input, styles.compose]}
          placeholder="Your message"
          onSubmitEditing={event => this.onOverviewTextSubmit(event)}
        />
        <Text style={styles.title}>Info</Text>
        <TextInput
          multiline={true}
          style={[styles.input, styles.compose]}
          placeholder="Your message"
          onSubmitEditing={event => this.onInfoTextSubmit(event)}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1, margin: 15 },
  title: { height: 15, marginTop: 10, color: '#4D4D4F', fontWeight: '600' },
  input: {
    height: 50,
    borderColor: '#D8D9DF',
    borderWidth: 2,
    borderRadius: 4,
    marginTop: 10,
    paddingLeft: 10
  },
  compose: {
    height: 200,
    textAlign: 'left',
    textAlignVertical: 'top',
    justifyContent: 'flex-start'
  },
  categoryContainer: { height: 100, backgroundColor: 'rgb(230, 230, 230)' },
  categoryButton: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D8D9DF',
    borderWidth: 1,
    borderRadius: 17,
    padding: 10,
    marginRight: 10,
    marginBottom: 10
  },
  category: {
    color: '#4D4D4F',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center'
  },
  titleInput: { height: 55 },
  subContainer: { width: '100%', marginTop: 10 },
  detailsConatiner: { flexDirection: 'row' },
  detailsInput: {
    width: '30%',
    height: 50,
    borderColor: '#D8D9DF',
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
    paddingLeft: 10
  },
  stopsInput: {
    height: 50,
    borderColor: '#D8D9DF',
    borderWidth: 2,
    borderRadius: 4,
    paddingLeft: 10
  }
})

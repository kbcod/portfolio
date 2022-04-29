import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, FlatList } from 'react-native'

const imgs = {
  menu: require('./img/menu.png'),
  bold: require('./img/bold.png'),
  italic: require('./img/italic.png'),
  link: require('./img/link.png'),
  list: require('./img/list.png'),
  numbered: require('./img/numbered.png'),
  quote: require('./img/quote.png'),
  code: require('./img/code.png')
}
type Props = {}
export default class Compose extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      categories: ['Arts', 'Comedy', 'Drama', 'Education', 'Food', 'Rap', 'Sports', 'War'],
      edits: ['bold', 'italic', 'link', 'list', 'numbered', 'quote', 'code']
    }
  }

  onPressMenu = () => {}

  onPressSave = () => {}

  onPressPublish = () => {}

  onPressCategory = category => {}

  onPressEdit = edit => {}

  renderEdit = edit => {
    return (
      <TouchableOpacity style={styles.editContainer} onPress={() => this.onPressEdit(edit.item)}>
        <Image source={imgs[edit.item]} />
      </TouchableOpacity>
    )
  }

  renderCategory = category => {
    return (
      <TouchableOpacity style={styles.categoryContainer} onPress={() => this.onPressCategory(category.item)}>
        <Text style={styles.category}>{category.item.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => this.onPressMenu()}>
              <Image source={imgs.menu} />
            </TouchableOpacity>
            <Text style={styles.header}>COMPOSE</Text>
            <TouchableOpacity onPress={() => this.onPressSave()}>
              <Text style={styles.save}>SAVE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter title " />
            <View style={styles.titleIndicator} />
          </View>
          <FlatList
            contentContainerStyle={styles.categoriesList}
            keyExtractor={(item, index) => JSON.stringify(index)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.categories}
            renderItem={item => this.renderCategory(item)}
          />
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.editList}
            keyExtractor={(item, index) => JSON.stringify(index)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.edits}
            renderItem={item => this.renderEdit(item)}
          />
          <View style={styles.bodyContainer}>
            <TextInput
              multiline={true}
              placeholder="Write your story..."
              style={styles.input}
              numberOfLines={100}
              maxLength={3000}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.publishContainer} onPress={() => this.onPressPublish()}>
          <Text style={styles.publish}>PUBLISH</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  mainContainer: {
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '700'
  },
  save: {
    color: '#377EFE',
    fontWeight: '700',
    letterSpacing: 3
  },
  inputContainer: {
    paddingLeft: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 50,
    borderColor: '#DCDADA',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  titleIndicator: {
    marginLeft: 10,
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#377EFE'
  },
  categoriesList: {
    marginTop: 10,
    padding: 10
  },
  categoryContainer: {
    borderRadius: 2,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    marginTop: 0,
    marginRight: 15,
    marginLeft: 0,
    marginBottom: 10
  },
  category: {
    color: '#A4A4A4',
    padding: 20,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 10,
    fontWeight: '700'
  },
  editList: {
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10
  },
  bodyContainer: {
    alignSelf: 'stretch'
  },
  input: {
    color: 'black',
    textAlignVertical: 'top',
    padding: 20,
    width: '100%',
    borderColor: '#DCDADA',
    borderTopWidth: 1
  },
  publishContainer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: '#377EFE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  publish: {
    color: 'white',
    letterSpacing: 1,
    fontSize: 10,
    fontWeight: '500'
  }
})

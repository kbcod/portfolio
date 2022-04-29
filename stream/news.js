import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native'

const imgs = {}

export default class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [
        {
          source: 'The Verge',
          excerpt:
            'Curabitur lobortis id lorem id bibendum. Ut id consec tetur magna. Quisque volutpat augue enim'
        },
        {
          source: 'The Verge',
          excerpt:
            'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus.'
        },
        {
          source: 'Medium',
          excerpt:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.'
        },
        {
          source: 'Medium',
          excerpt:
            'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa'
        },
        {
          source: 'Forbes',
          excerpt:
            'Praesent blandit, augue a posuere aliquam, arcu tortor feugiat turpis, quis lacinia augue sapien at tellus. Cras ut erat magna'
        }
      ]
    }
  }

  onPressArticle = article => {}

  renderArticle = article => {
    return (
      <TouchableOpacity onPress={() => this.onPressArticle(article.item)} style={styles.articleContainer}>
        <Text style={styles.source}>{article.item.source.toUpperCase()}</Text>
        <Text style={styles.excerpt}>{article.item.excerpt}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.today}>TODAY</Text>
        <FlatList
          contentContainerStyle={styles.articlesList}
          showsVerticalScrollIndicator={false}
          data={this.state.articles}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={item => this.renderArticle(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#383838',
    padding: 25
  },
  today: {
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    marginTop: 20,
    marginBottom: 40
  },
  articleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  source: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 20
  },
  excerpt: {
    color: 'white',
    fontSize: 13,
    fontWeight: '200'
  }
})

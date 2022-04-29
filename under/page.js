import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'

const imgs = {
  back: require('./img/back.png')
}

const Dimensions = require('Dimensions')
const WIDTH = Dimensions.get('window').width

type Props = {}
export default class Page extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      author: 'Pam Turner',
      date: 'April 5, 2017',
      time: '5 min',
      reads: '12k',
      image: 'https://source.unsplash.com/random',
      title: '1000 Miles Away From Home',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum est eu augue auctor euismod. Aliquam at tortor tempus, facilisis lacus ac, imperdiet arcu. Maecenas rhoncus imperdiet nisl, quis maximus ante bibendum cursus. In vestibulum feugiat neque sed mollis. Aenean elementum euismod diam vitae ullamcorper. Maecenas vel ipsum vel nunc tincidunt scelerisque ultricies non justo. Proin elementum lobortis tortor, in tristique leo pulvinar sed. Aenean luctus tortor sapien, eu laoreet neque ultricies id. Vestibulum eu nunc sed diam molestie efficitur. Suspendisse sed libero et nulla viverra vestibulum et a justo. Nam luctus posuere dui, quis posuere est elementum et. Nulla eget enim purus. Aliquam erat volutpat. Proin dictum sapien vitae dolor vehicula, sollicitudin consectetur urna faucibus. Sed est sapien, ultricies ut quam a, tincidunt malesuada neque. Aliquam dapibus lobortis dolor, porttitor interdum risus luctus et. Mauris sit amet sem at felis dapibus egestas. Integer non arcu feugiat, gravida tortor eu, pharetra enim. Mauris accumsan dolor dui, at commodo massa fermentum quis. Duis et justo efficitur, rhoncus elit sed, aliquam turpis. Duis tincidunt pharetra lacinia. Fusce porta enim mollis augue accumsan mollis. Phasellus iaculis, lacus sed maximus placerat, orci erat ornare orci, quis pharetra enim nunc vel nisl. Donec finibus ex justo, vel dignissim lectus sagittis eget. Ut ornare urna et dolor porttitor congue. Morbi velit purus, aliquam ac laoreet et, auctor quis libero. Cras hendrerit massa nisl, eget pretium lorem imperdiet euismod.',
      category: 'Comedy',
      comments: [
        {
          username: 'Rick Wisely',
          avatar: 'https://picsum.photos/300/300',
          text: 'Mauris accumsan dolor dui, at commodo massa fermentum quis',
          time: '35s'
        },
        {
          username: 'Kevin Lawrence',
          avatar: 'https://picsum.photos/300/300',
          text:
            'Morbi velit purus, aliquam ac laoreet et, auctor quis libero. Cras hendrerit massa nisl, eget pretium lorem imperdiet euismod',
          time: '1m'
        },
        {
          username: 'Timothy Soto',
          avatar: 'https://picsum.photos/300/300',
          text: 'Donec finibus ex justo, vel dignissim lectus sagittis eget',
          time: '5m'
        },
        {
          username: 'Jane Foster',
          avatar: 'https://picsum.photos/300/300',
          text: 'Aliquam dapibus lobortis dolor, porttitor interdum risus luctus',
          time: '25m'
        },
        {
          username: 'Kelly Adams',
          avatar: 'https://picsum.photos/300/300',
          text:
            'Proin elementum lobortis tortor, in tristique leo pulvinar sed. Aenean luctus tortor sapien, eu laoreet neque',
          time: '55m'
        }
      ]
    }
  }

  onPressBack = () => {}

  onPressCategory = () => {}

  onPressLoadMore = () => {}

  onPressUser = user => {}

  renderComment = comment => {
    return (
      <View style={styles.commentContainer}>
        <View style={styles.userContainer}>
          <TouchableOpacity onPress={() => this.onPressUser(comment.item.uid)}>
            <Image style={styles.avatar} source={{ uri: comment.item.avatar }} />
          </TouchableOpacity>
          <Text style={styles.username}>{comment.item.username}</Text>
          <Text style={styles.time}>{comment.item.time}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.comment}>{comment.item.text}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
          <Image style={styles.image} source={{ uri: this.state.image }} />
          <View style={styles.infoContainer}>
            <Text style={styles.info}>{this.state.author}</Text>
            <View style={styles.seperator} />
            <Text style={styles.info}>{this.state.date}</Text>
            <View style={styles.seperator} />
            <Text style={styles.info}>{this.state.time}</Text>
            <View style={styles.seperator} />
            <Text style={styles.info}>{this.state.reads} reads</Text>
          </View>

          <View style={styles.bar} />
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.text}>{this.state.text}</Text>
          <TouchableOpacity style={styles.categoryContainer} onPress={() => this.onPressCategory()}>
            <Text style={styles.category}>{this.state.category.toUpperCase()}</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <View style={styles.commentsContainer}>
            <Text style={styles.comments}>COMMENTS</Text>
            <FlatList
              scrollEnabled={false}
              style={styles.commentsList}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => JSON.stringify(index)}
              renderItem={item => this.renderComment(item)}
              data={this.state.comments}
              extraData={this.state}
            />
            <TouchableOpacity onPress={() => this.onPressLoadMore()}>
              <Text style={styles.load}>Load more comments</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center'
  },

  backContainer: {
    position: 'absolute',
    top: 30,
    left: 15
  },
  image: {
    alignSelf: 'stretch',
    marginTop: 15,
    width: '100%',
    height: WIDTH * 0.85
  },
  infoContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  info: {
    color: '#4A4A4A',
    fontSize: 13,
    fontWeight: '200'
  },
  seperator: {
    width: 8,
    height: 8,
    backgroundColor: '#377EFE',
    borderRadius: 4
  },
  bar: {
    marginTop: 10,
    width: '100%',
    height: 2,
    backgroundColor: '#FFD90E'
  },
  title: {
    marginTop: 15,
    textAlign: 'center',
    color: '#4A4A4A',
    fontSize: 30,
    fontWeight: '800'
  },
  text: {
    marginTop: 15,
    textAlign: 'justify',
    color: '#9A9A9A',
    fontSize: 12,
    fontWeight: '200',
    lineHeight: 25
  },
  categoryContainer: {
    marginTop: 20,
    borderRadius: 3,
    alignSelf: 'flex-end',
    backgroundColor: '#D3D3D3'
  },
  category: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  line: {
    marginTop: 20,
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
    opacity: 0.5
  },
  commentsContainer: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  commentContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 15,
    padding: 10,
    marginRight: 10
  },
  comments: {
    color: '#4A4A4A',
    fontSize: 20,
    fontWeight: '400'
  },
  commentsList: {
    paddingTop: 10
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C2C2C2',
    marginRight: 15
  },
  bodyContainer: {
    marginTop: 20,
    flexDirection: 'column'
  },
  username: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: '100'
  },
  comment: {
    color: '#D3D3D3',
    fontWeight: '100',
    marginRight: 30
  },
  time: {
    color: '#D3D3D3',
    fontWeight: '100',
    position: 'absolute',
    right: 0
  },
  load: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: '500'
  }
})

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from 'react-native'

const imgs = {
  back: require('./img/back.png'),
  comments: require('./img/comments.png'),
  fav: require('./img/fav.png')
}
type Props = {}
export default class Article extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      title: 'The Operating Costs of Owning A Circus',
      avatar: 'https://source.unsplash.com/random',
      author: 'Amy Wilson',
      length: 20,
      date: '10/12/18',
      image: 'https://source.unsplash.com/random',
      text:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo. \n\nAenean justo sem, luctus ac tincidunt eget, aliquam vel sapien. Fusce ac posuere arcu. Mauris gravida aliquam sapien ut mollis. Vestibulum lectus nulla, hendrerit id molestie id, varius eget ante. Pellentesque vestibulum massa et lacus mollis vestibulum. Pellentesque feugiat justo risus, sit amet consequat leo posuere et. Sed eleifend vel erat eu eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse commodo finibus lacus, ac pellentesque erat ullamcorper a. Proin dui nisi, porttitor ac turpis ac, imperdiet eleifend ante. Vivamus vulputate placerat fringilla. \n\nFusce pulvinar volutpat nisl, ut luctus nunc bibendum eget. Donec posuere, turpis ut pellentesque posuere, nunc neque consequat dolor, at maximus dui odio at nisl. Sed nec diam justo.'
    }
  }

  onPressBack = () => {}

  onPressAvatar = () => {}

  onPressComments = () => {}

  onPressFav = () => {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{this.state.title}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.authorContainer}>
              <TouchableOpacity onPress={() => this.onPressAvatar()}>
                <Image style={styles.avatar} source={{ uri: this.state.avatar }} />
              </TouchableOpacity>
              <View>
                <Text style={styles.author}>{this.state.author}</Text>
                <Text style={styles.date}>{this.state.date}</Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => this.onPressComments()}>
                <Image source={imgs.comments} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressFav()}>
                <Image source={imgs.fav} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.time}>{this.state.length} mins</Text>
          <Image style={styles.image} source={{ uri: this.state.image }} />
          <Text style={styles.text}>{this.state.text}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  headerContainer: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    marginTop: 15,
    fontSize: 30,
    marginBottom: 15,
    fontWeight: '200'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  detailsContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  authorContainer: {
    width: 135,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonsContainer: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  author: {
    fontWeight: '100'
  },
  date: {
    fontWeight: '700'
  },
  time: {
    marginTop: 10,
    color: '#D6D4D4',
    fontSize: 13,
    fontWeight: '200'
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 300
  },
  text: {
    marginTop: 20,
    textAlign: 'justify',
    height: '100%',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    paddingBottom: 20
  }
})

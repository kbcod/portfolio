import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

const imgs = {
  back: require('./img/back.png')
}
type Props = {}
export default class Following extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          username: 'Edward Marshall',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          username: 'Christian Reid',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          username: 'Sharon Warren',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          username: 'Debra Romero',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          username: 'Tyler Fowler',
          avatar: 'https://source.unsplash.com/random'
        },
        {
          username: 'Gary Burns',
          avatar: 'https://source.unsplash.com/random'
        }
      ]
    }
  }

  onPressBack = () => {}

  onPressUser = user => {}

  onPressFollow = user => {}

  renderuser = user => {
    return (
      <View style={styles.userContainer}>
        <TouchableOpacity onPress={() => this.onPressUser(user.item)}>
          <Image style={styles.avatar} source={{ uri: user.item.avatar }} />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>{user.item.username}</Text>
          <TouchableOpacity onPress={() => this.onPressFollow(user.item)} style={styles.followContainer}>
            <Text style={styles.follow}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <Image source={imgs.back} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>FOLLOWING</Text>
        </View>

        <FlatList
          style={styles.usersList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={item => this.renderuser(item)}
          data={this.state.users}
          extraData={this.state}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  backContainer: {
    position: 'absolute',
    top: 30,
    left: 15
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '700'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
    backgroundColor: '#C2C2C2'
  },
  name: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: '500'
  },
  followContainer: {
    marginTop: 10,
    width: 120,
    height: 30,
    backgroundColor: '#377EFE',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  follow: {
    color: 'white'
  },
  usersList: {
    padding: 20,
    alignSelf: 'stretch',
    marginTop: 20
  },
  userContainer: {
    flexDirection: 'row',
    marginBottom: 30
  }
})

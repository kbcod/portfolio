import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

const imgs = {
  close: require('./img/close.png')
}

type Props = {}
export default class Reading extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      title: 'A Time in Dark',
      chapter: '1. How I Got Here',
      page:
        'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.'
    }
  }

  onPressClose = () => {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.onPressClose()}>
            <Image source={imgs.close} />
          </TouchableOpacity>
          <Text style={styles.title}>{this.state.title}</Text>
          <View />
        </View>
        <Text style={styles.chapter}>{this.state.chapter}</Text>
        <ScrollView>
          <Text style={styles.page}>{this.state.page}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },
  header: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 30
  },
  title: {
    textAlign: 'center',
    color: '#3E3E3E',
    fontSize: 20,
    fontWeight: '700'
  },
  chapter: {
    color: '#4A4A4A',
    marginTop: 30,
    fontSize: 20,
    marginBottom: 50
  },
  page: {
    textAlign: 'justify',
    fontSize: 12,
    fontWeight: '300',
    color: '#BCBCBC',
    lineHeight: 25
  }
})

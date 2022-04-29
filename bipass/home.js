import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'

export default class Home extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      total: 4,
      agendas: [
        { times: 5, title: 'School', complete: 0.45, bg: '#FFEE30' },
        { times: 20, title: 'Work', complete: 0.7, bg: '#FFEE30' },
        { times: 10, title: 'Breakfast', complete: 0.2, bg: '#FFEE30' }
      ]
    }
  }

  onPressNew = () => {}

  onPressAgenda = () => {}

  renderAgendas = agenda => {
    var percent = JSON.stringify(agenda.item.complete * 100) + '%'

    return (
      <TouchableOpacity onPress={() => this.onPressAgenda()} style={styles.agendaContainer}>
        <View style={[styles.percentBar, { width: percent, backgroundColor: agenda.item.bg }]} />
        <Text style={styles.percent}>{percent}</Text>
        <Text style={styles.titleLabel}>TIMES</Text>
        <Text style={styles.agendaCount}>{agenda.item.times}</Text>
        <Text style={styles.category}>{agenda.item.title.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.total} AGENDAS</Text>
          <TouchableOpacity onPress={item => this.onPressNew()}>
            <Text style={styles.title}>NEW</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.agendaList}
          renderItem={item => this.renderAgendas(item)}
          data={this.state.agendas}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'black' },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  title: { fontSize: 25, fontWeight: '800', color: 'white' },
  seperator: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '30%',
    height: 2,
    marginTop: 10,
    marginBottom: 10
  },
  agendaList: { flex: 1, marginTop: 20 },
  agendaContainer: {
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 5
  },
  percentBar: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  percent: {
    fontSize: 15,
    fontWeight: '600',
    color: '#E7E7E7',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10
  },
  titleLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: 'white',
    paddingLeft: 15,
    paddingTop: 10
  },
  agendaCount: {
    fontSize: 20,
    fontWeight: '800',
    color: '#3A3A3A',
    paddingLeft: 15
  },
  category: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0097FF',
    paddingLeft: 15,
    paddingBottom: 10
  }
})

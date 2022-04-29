import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'

const imgs = {
  options: require('./img/options.png'),
  new: require('./img/new.png')
}
type Props = {}
export default class Home extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'dark', // light/dark
      category: 'Family',
      year: 17,
      month: 'February',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      tasks: [
        [
          {
            day: '08',
            timeStart: '9:00 AM',
            timeEnd: '10:00 AM',
            do: 'Walk Bud'
          },
          {
            day: '08',
            timeStart: '11:00 AM',
            timeEnd: '11:30 AM',
            do: 'Pickup fruits for Jordan'
          },
          {
            day: '08',
            timeStart: '2:00 PM',
            timeEnd: '4:00 PM',
            do: 'Order curtains'
          }
        ],
        [
          {
            day: '19',
            timeStart: '5:00 PM',
            timeEnd: '7:00 PM',
            do: 'School Play'
          },
          {
            day: '20',
            timeStart: '4:00 PM',
            do: 'Auntie Jack'
          }
        ],
        [
          {
            day: '21',
            timeStart: '6:00 AM',
            timeEnd: '7:00 AM',
            do: 'Take out trash'
          },
          {
            day: '21',
            timeStart: '11:00 AM',
            do: 'Exterminator'
          }
        ],
        [
          {
            day: '25',
            timeStart: '9:00 PM',
            do: 'Movie Night'
          }
        ]
      ]
    }
  }

  onPressYear = () => {}

  onPressOptions = () => {}

  onPressNew = () => {}

  onPressCategory = () => {}

  onPressMonth = month => {
    this.setState({ month })
  }

  renderDay = day => {
    var tasks = day.item

    var tasksList = []

    for (var x in tasks) {
      var task = tasks[x]

      tasksList.push(
        <View key={x} style={styles.taskContainer}>
          <View style={styles.dayContainer}>
            <Text style={this.state.theme == 'light' ? styles.dayLight : styles.dayDark}>
              {x == 0 ? task.day : ''}
            </Text>
            <Text style={this.state.theme == 'light' ? styles.dayMonthLight : styles.dayMonthDark}>
              {x == 0
                ? this.state.monthsShort[this.state.months.indexOf(this.state.month)].toUpperCase()
                : ''}
            </Text>
          </View>
          <View style={this.state.theme == 'light' ? styles.seperatorLight : styles.seperatorDark}>
            {x == 0 ? (
              <View style={this.state.theme == 'light' ? styles.startDayLight : styles.startDayDark} />
            ) : null}
          </View>
          <View style={styles.doContainer}>
            <Text style={this.state.theme == 'light' ? styles.timeLight : styles.timeDark}>
              {task.timeStart} {task.timeEnd ? `- ${task.timeEnd}` : ''}
            </Text>
            <Text style={this.state.theme == 'light' ? styles.doLight : styles.doDark}>{task.do}</Text>
          </View>
        </View>
      )
    }

    return <View>{tasksList}</View>
  }

  renderMonth = month => {
    return (
      <TouchableOpacity onPress={() => this.onPressMonth(month.item)} style={styles.monthContainer}>
        <Text style={this.state.theme == 'light' ? styles.monthLight : styles.monthDark}>
          {month.item.toUpperCase()}
        </Text>
        {this.state.month == month.item ? <View style={styles.active} /> : null}
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={this.state.theme == 'light' ? styles.containerLight : styles.containerDark}>
        <View
          style={[
            styles.headerContainer,
            this.state.theme == 'light' ? { borderBottomColor: 'black' } : { borderBottomColor: 'white' }
          ]}>
          <TouchableOpacity onPress={() => this.onPressYear()}>
            <Text style={this.state.theme == 'light' ? styles.yearLight : styles.yearDark}>
              {this.state.year}
            </Text>
          </TouchableOpacity>
          <FlatList
            style={styles.monthList}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.months}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderMonth(item)}
          />
          <TouchableOpacity onPress={() => this.onPressOptions()}>
            <Image
              style={this.state.theme == 'light' ? { tintColor: 'black' } : null}
              source={imgs.options}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <FlatList
            style={styles.daysList}
            showsVerticalScrollIndicator={false}
            data={this.state.tasks}
            extraData={this.state}
            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={item => this.renderDay(item)}
          />
          <TouchableOpacity
            style={[
              styles.categoryContainer,
              this.state.theme == 'light' ? { backgroundColor: 'black' } : { backgroundColor: 'white' }
            ]}
            onPress={() => this.onPressCategory()}>
            <Text style={this.state.theme == 'light' ? { color: 'white' } : { color: 'black' }}>
              {this.state.category.toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.newContainer,
              this.state.theme == 'light' ? { backgroundColor: 'black' } : { backgroundColor: 'white' }
            ]}
            onPress={() => this.onPressNew()}>
            <Image
              style={this.state.theme == 'light' ? { tintColor: 'white' } : { tintColor: 'black' }}
              source={imgs.new}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'black'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    borderBottomWidth: 1
  },
  yearLight: {
    color: 'white',
    padding: 10,
    backgroundColor: 'black',
    fontSize: 15,
    fontWeight: '600'
  },
  yearDark: {
    color: 'black',
    padding: 10,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: '600'
  },
  monthList: {
    marginLeft: 25,
    marginRight: 25
  },
  monthContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  monthLight: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  },
  monthDark: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  active: {
    width: '100%',
    height: 2,
    backgroundColor: '#50FBFE',
    alignSelf: 'center'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  daysList: {},
  dayContainer: {
    width: '20%',
    flexDirection: 'column'
  },
  taskContainer: {
    flexDirection: 'row'
  },
  doContainer: {
    flexDirection: 'column',
    marginTop: 30
  },
  dayLight: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30
  },
  dayDark: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30
  },
  dayMonthLight: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '300'
  },
  dayMonthDark: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '300'
  },
  timeLight: {
    color: 'black',
    fontWeight: '400'
  },
  timeDark: {
    color: 'white',
    fontWeight: '400'
  },
  doLight: {
    color: 'black',
    fontWeight: '200'
  },
  doDark: {
    color: 'white',
    fontWeight: '200'
  },
  seperatorLight: {
    height: '100%',
    width: 1,
    backgroundColor: 'black',
    marginRight: 20
  },
  seperatorDark: {
    height: '100%',
    width: 1,
    backgroundColor: 'white',
    marginRight: 20
  },
  startDayLight: {
    position: 'absolute',
    left: -6,
    width: 15,
    height: 15,
    borderColor: 'white',
    borderRadius: 7.5,
    borderWidth: 3,
    backgroundColor: 'black',
    marginTop: 35
  },
  startDayDark: {
    position: 'absolute',
    left: -5,
    width: 12,
    height: 12,
    borderColor: 'white',
    borderRadius: 6,
    borderWidth: 3,
    backgroundColor: '#50FBFE',
    marginTop: 35
  },
  newContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: 20,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

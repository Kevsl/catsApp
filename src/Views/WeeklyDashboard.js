import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Pie from 'react-native-pie'
import menuBurger from '../Assets/icons/burger.png'
import menuVolant from '../Assets/icons/menuVolant.png'
import { WeeklyDashboardStyle } from '../Styles/weeklyDashboardStyle'

export const WeeklyDashboard = ({ navigation }) => {
  const weeklyDrivedHours = 29
  const maxWeeklyDrivedHours = 47
  const twoWeeksDrivedHours = 29
  const maxTwoWeeksDrivedHours = 47
  const weeklyBreak = 4
  const minWeeklyBreak = 25
  const twoWeeksBreak = 34
  const minTwoWeeksBreak = 45
  const workedHours = 42

  function hoursPercentage(hours, hoursMax) {
    return Math.floor((100 * hours) / hoursMax)
  }

  return (
    <LinearGradient
      colors={['#D3CCE3', '#E9E4F0']}
      style={WeeklyDashboardStyle.linearGradient}
    >
      <SafeAreaView style={WeeklyDashboardStyle.linearGradient}>
        <TouchableOpacity
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
          x
          onPress={() => navigation.navigate('MainMenu')}
        >
          <Image source={menuBurger} />
        </TouchableOpacity>
        <Text style={WeeklyDashboardStyle.mainTitle}> Ma semaine</Text>

        <View style={WeeklyDashboardStyle.trait}></View>
        <View style={WeeklyDashboardStyle.dashboard}>
          <View style={WeeklyDashboardStyle.counter}>
            <Text style={WeeklyDashboardStyle.counterTitle}>
              Conduite hebdomadaire
            </Text>
            <View style={WeeklyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: hoursPercentage(
                      weeklyDrivedHours,
                      maxWeeklyDrivedHours
                    ),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={WeeklyDashboardStyle.gaugeText}>
                {weeklyDrivedHours}H / {maxWeeklyDrivedHours}
              </Text>
            </View>
          </View>
          <View style={WeeklyDashboardStyle.counter}>
            <Text style={WeeklyDashboardStyle.counterTitle}>
              Conduite bi-hebdomadaire
            </Text>
            <View style={WeeklyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: hoursPercentage(
                      twoWeeksDrivedHours,
                      maxTwoWeeksDrivedHours
                    ),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={WeeklyDashboardStyle.gaugeText}>
                {twoWeeksDrivedHours}H / {maxTwoWeeksDrivedHours}H
              </Text>
            </View>
          </View>
          <View style={WeeklyDashboardStyle.counter}>
            <Text style={WeeklyDashboardStyle.counterTitle}>
              Repos hebdomadaire
            </Text>
            <View style={WeeklyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: hoursPercentage(weeklyBreak, minWeeklyBreak),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={WeeklyDashboardStyle.gaugeText}>
                {weeklyBreak}H / {minWeeklyBreak}H
              </Text>
            </View>
          </View>
          <View style={WeeklyDashboardStyle.counter}>
            <Text style={WeeklyDashboardStyle.counterTitle}>
              Repos bi-hebdomadaire
            </Text>
            <View style={WeeklyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: hoursPercentage(
                      twoWeeksBreak,
                      minTwoWeeksBreak
                    ),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={WeeklyDashboardStyle.gaugeText}>
                {twoWeeksBreak}H / {minTwoWeeksBreak}H
              </Text>
            </View>
          </View>
          <View style={WeeklyDashboardStyle.counter}>
            <Text style={WeeklyDashboardStyle.counterTitle}>
              Heures Travaillées{' '}
            </Text>
            <View style={WeeklyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: workedHours,
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={WeeklyDashboardStyle.gaugeText}>{workedHours}H</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

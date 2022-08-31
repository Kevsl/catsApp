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
import { useSelector } from 'react-redux'
import {
  getAmplitude,
  getDrivingTime,
  getDailyDrivingTime,
  getServiceTime,
  getDailyServiceTime,
} from '../redux/reducers/dayInformations'
import { hoursPercentage, secondsToH, secondsToHm } from '../utils/calculators'
import { DashboardStyle } from '../Styles/dashboardStyle'

const Dashboard = ({ navigation }) => {
  let continueDrivingHoursPercentage = Math.floor(
    (100 * continueDrivingHours) / 4.5
  )
  const continueDrivingHours = useSelector(getDrivingTime)
  const maxContinueDrivingHours = 4.5
  const dailyDrivingHours = useSelector(getDailyDrivingTime)
  const maxDailyDrivingHours = 9
  const continueService = useSelector(getServiceTime)
  const maxContinueService = 6
  const dailyService = useSelector(getDailyServiceTime)
  const maxDailyService = 11
  const amplitude = useSelector(getAmplitude)
  const maxAmplitude = 13

  return (
    <LinearGradient
      colors={['#D3CCE3', '#E9E4F0']}
      style={DashboardStyle.linearGradient}
    >
      <SafeAreaView style={DashboardStyle.linearGradient}>
        <TouchableOpacity
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => navigation.navigate('MainMenu')}
          style={DashboardStyle.PrimaryMenuButton}
        >
          <Image source={menuBurger} />
        </TouchableOpacity>
        <Text style={DashboardStyle.mainTitle}> Ma journée</Text>

        <View style={DashboardStyle.trait}></View>
        <View style={DashboardStyle.dashboard}>
          <View style={DashboardStyle.counter}>
            <Text style={DashboardStyle.counterTitle}>Conduite continue</Text>
            <View style={DashboardStyle.pie}>
              <Pie
                radius={58}
                innerRadius={54}
                sections={[
                  {
                    percentage: hoursPercentage(continueDrivingHours, 16200),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={DashboardStyle.gaugeText}>
                {secondsToHm(continueDrivingHours)} / 4H30
              </Text>
            </View>
          </View>
          <View style={DashboardStyle.counter}>
            <Text style={DashboardStyle.counterTitle}>
              Conduite journalière
            </Text>
            <View style={DashboardStyle.pie}>
              <Pie
                radius={58}
                innerRadius={54}
                sections={[
                  {
                    percentage: hoursPercentage(dailyDrivingHours, 32400),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={DashboardStyle.gaugeText}>
                {secondsToHm(dailyDrivingHours)} / 10H
              </Text>
            </View>
          </View>
          <View style={DashboardStyle.counter}>
            <Text style={DashboardStyle.counterTitle}>Service continue</Text>
            <View style={DashboardStyle.pie}>
              <Pie
                radius={58}
                innerRadius={54}
                sections={[
                  {
                    percentage: hoursPercentage(continueService, 21600),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={DashboardStyle.gaugeText}>
                {secondsToHm(continueService)} / 6H
              </Text>
            </View>
          </View>
          <View style={DashboardStyle.counter}>
            <Text style={DashboardStyle.counterTitle}>Service journalier</Text>
            <View style={DashboardStyle.pie}>
              <Pie
                radius={58}
                innerRadius={54}
                sections={[
                  {
                    percentage: hoursPercentage(dailyService, 36000),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={DashboardStyle.gaugeText}>
                {secondsToHm(dailyService)} / 10H
              </Text>
            </View>
          </View>
          <View style={DashboardStyle.counter}>
            <Text style={DashboardStyle.counterTitle}>Amplitude </Text>
            <View style={DashboardStyle.pie}>
              <Pie
                radius={58}
                innerRadius={54}
                sections={[
                  {
                    percentage: hoursPercentage(amplitude, 54000),
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={DashboardStyle.gaugeText}>
                {secondsToHm(amplitude)} / 15H
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Dashboard

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
import { YearlyDashboardStyle } from '../Styles/yearlyDashboardStyle'

export const YearlyDashboard = ({ navigation }) => {
  const annualyDrivedHours = 1229

  const annualyWorkedHours = 1442

  return (
    <LinearGradient
      colors={['#D3CCE3', '#E9E4F0']}
      style={YearlyDashboardStyle.linearGradient}
    >
      <SafeAreaView style={YearlyDashboardStyle.linearGradient}>
        <TouchableOpacity
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
          x
          onPress={() => navigation.navigate('MainMenu')}
          style={YearlyDashboardStyle.PrimaryMenuButton}
        >
          <Image source={menuBurger} />
        </TouchableOpacity>
        <Text style={YearlyDashboardStyle.mainTitle}> Mon année</Text>

        <View style={YearlyDashboardStyle.trait}></View>
        <View style={YearlyDashboardStyle.dashboard}>
          <View style={YearlyDashboardStyle.counter}>
            <Text style={YearlyDashboardStyle.counterTitle}>Conduite</Text>
            <View style={YearlyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: annualyDrivedHours,
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={YearlyDashboardStyle.gaugeText}>
                {annualyDrivedHours}
              </Text>
            </View>
          </View>
          <View style={YearlyDashboardStyle.counter}>
            <Text style={YearlyDashboardStyle.counterTitle}>Travail</Text>
            <View style={YearlyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: annualyWorkedHours,
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={YearlyDashboardStyle.gaugeText}>
                {annualyWorkedHours}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

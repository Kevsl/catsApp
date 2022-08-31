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
import { MonthlyDashboardStyle } from '../Styles/monthlyDashboardStyle'

export const MonthlyDashboard = ({ navigation }) => {
  const monthlyDrivedHours = 29

  const monthlyWorkedHours = 42

  return (
    <LinearGradient
      colors={['#D3CCE3', '#E9E4F0']}
      style={MonthlyDashboardStyle.linearGradient}
    >
      <SafeAreaView style={MonthlyDashboardStyle.linearGradient}>
        <TouchableOpacity
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => navigation.navigate('MainMenu')}
          style={MonthlyDashboardStyle.PrimaryMenuButton}
        >
          <Image source={menuBurger} />
        </TouchableOpacity>
        <Text style={MonthlyDashboardStyle.mainTitle}> Mon mois</Text>

        <View style={MonthlyDashboardStyle.trait}></View>
        <View style={MonthlyDashboardStyle.dashboard}>
          <View style={MonthlyDashboardStyle.counter}>
            <Text style={MonthlyDashboardStyle.counterTitle}>Conduite</Text>
            <View style={MonthlyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: monthlyDrivedHours,
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={MonthlyDashboardStyle.gaugeText}>
                {monthlyDrivedHours}
              </Text>
            </View>
          </View>
          <View style={MonthlyDashboardStyle.counter}>
            <Text style={MonthlyDashboardStyle.counterTitle}>Travail</Text>
            <View style={MonthlyDashboardStyle.pie}>
              <Pie
                radius={40}
                innerRadius={37.5}
                sections={[
                  {
                    percentage: monthlyWorkedHours,
                    color: '#fca311',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <Text style={MonthlyDashboardStyle.gaugeText}>
                {monthlyWorkedHours}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

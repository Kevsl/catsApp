import close from '../Assets/icons/close.png'
import { MainMenuStyle } from '../Styles/mainMenuStyle'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { clearAll } from '../utils/localStorage'
import { resetAll } from '../redux/reducers/dayInformations'
import { useDispatch } from 'react-redux'
export const MainMenu = ({ navigation }) => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={MainMenuStyle.menuLayer}>
      <TouchableOpacity
        title=" Main menu"
        accessibilityLabel="Display main menu "
        style={MainMenuStyle.PrimaryMenuButton}
        onPress={() => navigation.goBack()}
      >
        <Image source={close} style={MainMenuStyle.close} />
      </TouchableOpacity>

      <Text style={MainMenuStyle.menuTitle}>Routiers 3.0</Text>
      <View style={MainMenuStyle.menuTrait}></View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text style={MainMenuStyle.menuItems}>Ma journée</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeeklyDashboard')}
        >
          <Text style={MainMenuStyle.menuItems}>Ma semaine</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MonthlyDashboard')}
        >
          <Text style={MainMenuStyle.menuItems}>Mon mois</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('YearlyDashboard')}
        >
          <Text style={MainMenuStyle.menuItems}>Mon année</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={MainMenuStyle.menuItems}>Tableau de bord</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EditChronomode')}>
        <Text style={MainMenuStyle.menuItems}>Activités détaillées</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
            clearAll()
            dispatch(resetAll())
          }}
        >
          <Text style={MainMenuStyle.menuItems}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { NavBar } from '../Components/NavBar'
import { HomeStyle } from '../Styles/Home'
export const About = ({ navigation }) => {
  return (
    <View style={HomeStyle.container}>
      <Text>About</Text>
      <Text>Welcome to CalculaCat 2022 !!</Text>
      <NavBar />
    </View>
  )
}

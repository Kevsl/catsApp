import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { HomeStyle } from '../Styles/Home'
import { GazComponent } from '../Components/Layouts/gazComponent'

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <Text> Gas finder</Text>
      <GazComponent />
    </SafeAreaView>
  )
}

import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { HomeStyle } from '../Styles/Home'
export const Home = ({ navigation }) => {
  return (
    <View style={HomeStyle.container}>
      <Text>Hello World</Text>
      <Text>Welcome to CalculaCat 2022 !!</Text>
    </View>
  )
}

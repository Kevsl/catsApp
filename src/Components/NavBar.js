import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
export const NavBar = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('About')
        }}
      >
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  )
}

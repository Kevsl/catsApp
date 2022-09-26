import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const NavBar = () => {
  const navigation = useNavigation()

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

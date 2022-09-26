import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { StyleSheet } from 'react-native'

export const NavBar = () => {
  const navigation = useNavigation()

  return (
    <View style={NavBarStyle.container}>
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
        <Text style={NavBarStyle.button}>About</Text>
      </TouchableOpacity>
    </View>
  )
}
const NavBarStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    justifyContent: 'space-around',
    width: '50%',
  },
  button: {},
})

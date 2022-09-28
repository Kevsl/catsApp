import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { GameCard } from '../../Components/Layouts/GameCard'
import { HomeStyle } from '../../Styles/Home'
import simple from '../..//Assets/simple.jpg'
import good from '../../Assets/good.jpg'
import hard from '../../Assets/hard.jpg'
import React from 'react'

export const HomeMenu = (props) => {
  navigation = props.navigation
  return (
    <SafeAreaView style={HomeStyle.container}>
      <Text>Choose your level</Text>
      <TouchableOpacity
        style={HomeStyle.button}
        onPress={() => {
          navigation.navigate('Simple')
        }}
      >
        <GameCard title="Simple" uri={simple} />
      </TouchableOpacity>
      <TouchableOpacity
        style={HomeStyle.button}
        onPress={() => {
          navigation.navigate('Good')
        }}
      >
        <GameCard title="Good" uri={good} />
      </TouchableOpacity>
      <TouchableOpacity
        style={HomeStyle.button}
        onPress={() => {
          navigation.navigate('Expert')
        }}
      >
        <GameCard title="Expert" uri={hard} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

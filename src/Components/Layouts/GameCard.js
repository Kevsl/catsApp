import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { GameCardStyle } from '../../Styles/GameCard'
export const GameCard = (props) => {
  return (
    <View style={GameCardStyle.container}>
      <Text>{props.title}</Text>
      <Image source={props.uri} style={GameCardStyle.image} />
    </View>
  )
}

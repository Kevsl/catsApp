import { LevelsStyle } from '../Styles/Levels'
import { Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

export const Easy = ({ navigation }) => {
  const [param1, setParam1] = useState(Math.floor(Math.random() * 10))
  const [param2, setParam2] = useState(Math.floor(Math.random() * 10))
  const [param3, setParam3] = useState(Math.floor(Math.random() * 10))
  const [userInput, setUserInput] = useState(0)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    let correctResult = param1 + param2 + param3
    correctResult === parseInt(userInput) ? setSuccess(true) : setSuccess(false)
  }, [userInput])

  return (
    <SafeAreaView style={LevelsStyle.view}>
      <Text style={LevelsStyle.text}>Good</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        style={LevelsStyle.button}
      >
        <Text>Retour</Text>
      </TouchableOpacity>

      <Text style={LevelsStyle.text}>
        {param1} +{param2} +{param3} = ?
      </Text>
      <Text style={LevelsStyle.text}> {success === true && 'Gagné'}</Text>

      <TextInput onChangeText={setUserInput} style={LevelsStyle.input} />
    </SafeAreaView>
  )
}

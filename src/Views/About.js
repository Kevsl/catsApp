import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native'
import { NavBar } from '../Components/NavBar'
import user from '../redux/reducers/user'
import { HomeStyle } from '../Styles/Home'
import { catApi } from '../Services/catApi'

export const About = ({ navigation }) => {
  const [param1, setParam1] = useState(Math.floor(Math.random() * 10))
  const [param2, setParam2] = useState(Math.floor(Math.random() * 10))
  const [userInput, setUserInput] = useState(0)
  const [success, setSuccess] = useState(false)
  const [img, setImg] = useState(null)

  useEffect(() => {
    success === true
      ? catApi().then((res) => {
          setImg(res.file)
        })
      : null
  }, [success])

  useEffect(() => {
    let correctResult = param1 + param2
    correctResult === parseInt(userInput) ? setSuccess(true) : setSuccess(false)
  })

  return (
    <View style={HomeStyle.container}>
      <Text>
        {param1} +{param2} = ?
      </Text>
      <TextInput style={HomeStyle.input} onChangeText={setUserInput} />
      <Text></Text>

      {img &&
        img !== undefined &&
        img.map((image) => {
          return <Image style={HomeStyle.image} source={{ uri: { image } }} />
        })}

      <NavBar />
    </View>
  )
}

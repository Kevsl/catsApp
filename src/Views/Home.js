import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import simple from '../Assets/simple.jpg'
import good from '../Assets/good.jpg'
import hard from '../Assets/hard.jpg'
import { getData, setData } from '../utils/localStorage'

import { HomeStyle } from '../Styles/Home'
import { GameCard } from '../Components/GameCard'
import Geolocation from 'react-native-geolocation-service'

export const Home = ({ navigation }) => {
  Geolocation.requestAuthorization('always')

  const [score, setScore] = useState()
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  useEffect(() => {
    getData('score').then((res) => {
      if (res && res !== 'undefined' && res !== null) {
        setScore(res)
      } else {
        let newScore = 0
        setData('score', newScore.toString())
        setScore('0')
      }
    })
  }, [score])

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        (error) => {
          // See error code charts below.
          console.log(error)
        },
        { enableHighAccuracy: true, timeout: 4000, maximumAge: 4000 }
      )
    }, 5000)
  })

  return (
    <View style={HomeStyle.container}>
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
      <Text>Score : {score}</Text>
      <Text>Coordonées gps :</Text>
      <Text> Latitude : {latitude}</Text>
      <Text>Longitude :{longitude}</Text>
    </View>
  )
}

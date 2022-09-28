import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { getData, setData } from '../utils/localStorage'
import { haversineDistance } from '../utils/calculator'
import { HomeStyle } from '../Styles/Home'
import Geolocation from 'react-native-geolocation-service'
import { HomeMenu } from '../Components/Layouts/Menu'

export const Home = ({ navigation }) => {
  const [score, setScore] = useState()
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [speed, setSpeed] = useState()
  Geolocation.requestAuthorization('always')

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
    let oldLatitude = latitude
    let oldLongitude = longitude

    interval = setInterval(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        (error) => {},
        { enableHighAccuracy: true, timeout: 4000, maximumAge: 4000 }
      )
    }, 6000)
    let distance = haversineDistance(
      [oldLatitude, oldLongitude],
      [latitude, longitude]
    )
    setSpeed(distance)
  })

  return (
    <View style={HomeStyle.container}>
      <HomeMenu navigation={navigation} />
      <View style={HomeStyle.datas}>
        <Text>Score : {score}</Text>
        <View>
          <Text>Coordonées gps :</Text>
          <Text>Latitude : {latitude}</Text>
          <Text>Longitude :{longitude}</Text>
          <Text>Vitesse:</Text>
          <Text> {speed}</Text>
        </View>
      </View>
    </View>
  )
}

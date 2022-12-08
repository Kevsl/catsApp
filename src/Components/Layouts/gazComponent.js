import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { getCity } from '../../Services/cityService'
import { getGazPrices, getCustomGaz } from '../../Services/gazService'
import { HomeStyle } from '../../Styles/Home'
import { GazCard } from './gazCard'

export const GazComponent = () => {
  const [latitude, setLatitude] = useState('45.726680755615234')
  const [longitude, setLongitude] = useState('4.830711364746094')
  const [loaded, setLoaded] = useState(false)
  const [city, setCity] = useState('true')
  const [ville, setVille] = useState('')
  const [code, setCode] = useState('')
  const [gazDatas, setGazDatas] = useState()
  const [product, setProduct] = useState('')
  // useEffect(() => {
  //   if (!latitude) {
  //     Geolocation.requestAuthorization('always')
  //     Geolocation.getCurrentPosition(
  //       (position) => {
  //         setLatitude(position.coords.latitude)
  //         setLongitude(position.coords.longitude)
  //       },
  //       (error) => {
  //         console.log(error)
  //       },
  //       { enableHighAccuracy: true, timeout: 4000, maximumAge: 4000 }
  //     )
  //   }
  // })

  useEffect(() => {
    if (latitude && latitude !== 'undefined') {
      setLoaded(false)
      getCity(latitude, longitude).then((res) => {
        if (res !== 'undefined') {
          let city = res.city + ' ' + res.context
          setCity()
          if (product === 'Tous') {
            getGazPrices(city).then((response) => {
              setGazDatas(response)
              setLoaded(true)
            })
          } else {
            getCustomGaz(product, city).then((res2) => {
              setGazDatas(res2)
            })
          }
        }
      })
    }
    setLoaded(true)
  }, [product])
  return (
    <View style={HomeStyle.body}>
      <View style={HomeStyle.nav}>
        <TouchableOpacity
          onPress={() => {
            setProduct('Gazole')
          }}
          style={HomeStyle.gazButton}
        >
          <Text>Gazole</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setProduct('E10')
          }}
          style={HomeStyle.gazButton}
        >
          <Text>E10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setProduct('SP98')
          }}
          style={HomeStyle.gazButton}
        >
          <Text>SP98</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setProduct('E85')
          }}
          style={HomeStyle.gazButton}
        >
          <Text>E85</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setProduct('Tous')
          }}
          style={HomeStyle.gazButton}
        >
          <Text>Tous</Text>
        </TouchableOpacity>
      </View>
      {loaded === true ? (
        <ScrollView>
          {gazDatas &&
            product === 'Tous' &&
            gazDatas.map((result) => {
              return <GazCard data={result} />
            })}
          {gazDatas &&
            product !== 'Tous' &&
            gazDatas.map((result) => {
              return <GazCard data={result} />
            })}
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  )
}

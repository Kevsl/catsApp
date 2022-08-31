import { getUsersChronomode } from '../Services/timeDatas/chronomodeService'
import React, { useEffect, useState } from 'react'
import { EditChronomodeStyle } from '../Styles/editChronomode'
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { getData } from '../utils/localStorage'
import menuBurger from '../Assets/icons/burger.png'
import moment from 'moment'
import 'moment/locale/fr' // without this line it didn't work
moment.locale('fr')

export const EditChronoMode = ({ navigation }) => {
  const [userId, setUserId] = useState('')
  const [chronoList, setChronoList] = useState([])
  const [accessToken, setAccessToken] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData('utilisateur_id').then((res) => setUserId(res))
    getData('access_token').then((response) => {
      setAccessToken(response)
    })
  }, [])

  function handleDatas() {
    setIsLoading(true)
    if (accessToken) {
      getUsersChronomode(userId, accessToken).then((res) => {
        setChronoList(res)
      })
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleDatas()
  }, [accessToken])
  return (
    <SafeAreaView>
      <TouchableOpacity
        title="Main menu"
        accessibilityLabel="Main menu button"
        style={EditChronomodeStyle.PrimaryMenuButton}
        onPress={() => navigation.navigate('MainMenu')}
      >
        <Image source={menuBurger} />
      </TouchableOpacity>

      <Text>Activités détaillées</Text>

      <ScrollView style={EditChronomodeStyle.scrollView}>
        {chronoList !== undefined && chronoList.length > 0
          ? chronoList.map((chronoItem) => {
              //prettier-ignore
              return  <View style={EditChronomodeStyle.list} key={chronoItem.id_chronomode}>
          <Text style={EditChronomodeStyle.item}>{chronoItem.nom_chronomode}</Text>
          <Text style={EditChronomodeStyle.item}>{moment(chronoItem.date_chronomode).format(' Do MMMM  YYYY, H:mm:ss')}</Text>
          </View>
            })
          : null}
      </ScrollView>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#14213D"
          style={EditChronomodeStyle.loading}
        />
      ) : null}
    </SafeAreaView>
  )
}

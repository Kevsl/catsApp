import { LevelsStyle } from '../Styles/Levels'
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getSearchedContent } from '../Services/Nasa'
import { Card } from '../Components/Card'
import { getData, setData, removeItem } from '../utils/localStorage'

export const Good = ({ navigation }) => {
  const [param1, setParam1] = useState(Math.floor(Math.random() * 10))
  const [param2, setParam2] = useState(Math.floor(Math.random() * 10))
  const [param3, setParam3] = useState(Math.floor(Math.random() * 10))
  const [userInput, setUserInput] = useState(0)
  const [success, setSuccess] = useState(false)
  const [results, setResults] = useState([])
  const [keyword, setKeyword] = useState('')
  const [score, setScore] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let correctResult = param1 + param2 + param3
    correctResult === parseInt(userInput)
      ? (setSuccess(true),
        getData('score').then((res) => {
          let newScore = Math.floor(15 + parseInt(res))
          setData('score', newScore.toString())
        }))
      : setSuccess(false)
  }, [userInput])

  function getNasaPics() {
    setIsLoading(true)
    getSearchedContent(keyword).then((res) => {
      setResults(res.data.collection.items)
    })
    setIsLoading(false)
  }
  return (
    <View style={LevelsStyle.view}>
      <Text style={LevelsStyle.text}>Good</Text>

      <Text style={LevelsStyle.text}>
        {param1} +{param2} +{param3} = ?
      </Text>
      <Text style={LevelsStyle.text}>Votre Résultat</Text>
      <TextInput
        placeholder="Résultat"
        onChangeText={setUserInput}
        style={LevelsStyle.input}
      />

      {success === true && (
        <View>
          <Text style={LevelsStyle.success}>
            Gagné, vous avez accès aux données de la nasa! Entrez un mot clef
          </Text>
          <TextInput
            placeholder="Votre mot clef"
            onChangeText={setKeyword}
            style={LevelsStyle.input}
          />
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          getNasaPics()
        }}
        style={LevelsStyle.search}
      >
        <Text style={LevelsStyle.searchText}>Rechercher</Text>
      </TouchableOpacity>
      {isLoading === true && <ActivityIndicator size="large" color="#14213D" />}
      <ScrollView style={LevelsStyle.scrollView}>
        {results
          ? results.map((result, i) => {
              if (result.links) {
                return (
                  <Card
                    url={result.links[0].href}
                    date_created={result.data[0].date_created}
                    title={result.data[0].title}
                    key={i}
                  />
                )
              }
            })
          : null}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        style={LevelsStyle.button}
      >
        <Text>Retour</Text>
      </TouchableOpacity>
    </View>
  )
}

import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { checkEmail, checkPassword } from '../utils/regex'
import { loginFunction } from '../Services/authService'
import menuBurger from '../Assets/icons/burger.png'
import { useDispatch } from 'react-redux'
import { setAccessToken, setUserName, setId } from '../redux/reducers/user'
import { LoginStyle } from '../Styles/loginStyle'
import { getData, setData, removeItem } from '../utils/localStorage'

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('Arbre@vert.com')
  const [password, setPassword] = useState('Azerty1!')
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData('access_token').then((response) => {
      if (response && response !== undefined) {
        navigation.navigate('Home')
      }
    })
  }, [])

  async function handleLogin() {
    return checkEmail(email) === true && checkPassword(password) === true
      ? (setIsLoading(true),
        loginFunction(email, password).then((res) => {
          if (res.status === 200) {
            dispatch(setAccessToken(res.data.access_token))
            dispatch(setUserName(res.data.firstName))
            dispatch(setId(res.data.userId))
            setIsLoading(false)
            setData('access_token', res.data.access_token)
            setData('utilisateur_id', res.data.userId)
            setData('first_name', res.data.firstName)
            navigation.navigate('Home')
          }
        }))
      : null
  }

  return (
    <View style={LoginStyle.container}>
      <TouchableOpacity
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => navigation.navigate('MainMenu')}
        style={LoginStyle.PrimaryMenuButton}
      >
        <Image source={menuBurger} />
      </TouchableOpacity>
      <Image style={LoginStyle.bgImage} source={require('../Assets/bg.jpg')} />

      <View style="auto" />
      <View style={LoginStyle.inputView}>
        <TextInput
          style={LoginStyle.TextInput}
          placeholder="Email"
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={LoginStyle.inputView}>
        <TextInput
          style={LoginStyle.TextInput}
          placeholder="Mot de passe"
          placeholderTextColor="#000"
          // secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={LoginStyle.forgot_button}>Mot de passe oublié?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={LoginStyle.loginBtn}
        onPress={() => handleLogin()}
      >
        <Text style={LoginStyle.loginText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={LoginStyle.noAccount}
      >
        <Text style={LoginStyle.noAccountText}>
          Pas encore de compte ? Inscrivez-vous
        </Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#fff"
          style={LoginStyle.loading}
        />
      ) : null}
    </View>
  )
}

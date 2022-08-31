import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native'
import { checkEmail, checkPassword } from '../utils/regex'
import { registerFunction } from '../Services/authService'
import menuBurger from '../Assets/icons/burger.png'
import { RegisterStyle } from '../Styles/registerStyle'
import { getData, setData } from '../utils/localStorage'

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleRegister() {
    if (passwordConfirm === password) {
      return checkEmail(email) === true && checkPassword(password) === true
        ? (setIsLoading(true),
          registerFunction(email, password, firstName).then((res) => {
            dispatch(setAccessToken(res.data.access_token))
            dispatch(setUserName(res.data.firstName))
            dispatch(setId(res.data.userId))
            setIsLoading(false)
            if (
              res.data.access_token !== null ||
              res.data.access_token !== undefined
            ) {
              setData('access_token', res.data.access_token)
              setData('utilisateur_id', res.data.userId)
              setData('first_name', res.data.firstName)
              navigation.navigate('Home')
            }
          }))
        : null
    } else {
      alert('mot de passe non identique')
    }
  }

  return (
    <View style={RegisterStyle.container}>
      <Image
        style={RegisterStyle.bgImage}
        source={require('../Assets/bg.jpg')}
      />

      <View style="auto" />
      <View style={RegisterStyle.inputView}>
        <TextInput
          style={RegisterStyle.TextInput}
          placeholder="Email"
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={RegisterStyle.inputView}>
        <TextInput
          style={RegisterStyle.TextInput}
          placeholder="Mot de passe"
          placeholderTextColor="#000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={RegisterStyle.inputView}>
        <TextInput
          style={RegisterStyle.TextInput}
          placeholder="Confirmer votre mot de passe"
          placeholderTextColor="#000"
          onChangeText={(passwordConfirm) =>
            setPasswordConfirm(passwordConfirm)
          }
        />
      </View>
      <View style={RegisterStyle.inputView}>
        <TextInput
          style={RegisterStyle.TextInput}
          placeholder="Prénom ou pseudonyme"
          placeholderTextColor="#000"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <TouchableOpacity
        style={RegisterStyle.registerBtn}
        onPress={() => handleRegister()}
      >
        <Text style={RegisterStyle.loginText}>S'inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={RegisterStyle.noAccount}
      >
        <Text style={RegisterStyle.noAccountText}>
          Vous avez déja un compte? Connectez vous
        </Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator
          style={RegisterStyle.loading}
          size="large"
          color="#fff"
        />
      ) : null}
    </View>
  )
}

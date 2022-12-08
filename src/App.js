import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import React from 'react'

import { Home } from './Views/Home'
import { About } from './Views/About'
import { Easy } from './Views/Easy'
import { Good } from './Views/Good'
import { Expert } from './Views/Expert'

const Stack = createNativeStackNavigator()

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

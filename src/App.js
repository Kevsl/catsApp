import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import Store from './store'

import Dashboard from './Views/Dashboard'
import { Home } from './Views/Home'
import { MainMenu } from './Views/MainMenu'
import { WeeklyDashboard } from './Views/WeeklyDashboard'
import { MonthlyDashboard } from './Views/MonthlyDashboard'
import { YearlyDashboard } from './Views/yearlyDashboard'
import { Login } from './Views/Login'
import { Register } from './Views/Register'
import { EditChronoMode } from './Views/EditChronomode'

const Stack = createNativeStackNavigator()

const App = ({ navigation }) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="WeeklyDashboard"
            component={WeeklyDashboard}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MonthlyDashboard"
            component={MonthlyDashboard}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="YearlyDashboard"
            component={YearlyDashboard}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditChronomode"
            component={EditChronoMode}
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'


import Restaurantes from '../screens/Restaurantes'


const Stack = createStackNavigator()

export default function Router() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Restaurantes'>
                <Stack.Screen name='Restaurantes' component={Restaurantes} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
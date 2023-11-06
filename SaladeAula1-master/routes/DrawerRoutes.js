
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../home/Home'
import ListaCarros from '../screens/Formulários/ListaCarros/ListaCarros'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Carros'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Carros" component={ListaCarros} />
        </Drawer.Navigator>

    )
}
 
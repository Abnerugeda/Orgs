import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Produtor from '../telas/Produtor';
import Home from '../telas/Home';
const Stack = createNativeStackNavigator();

export default function ProdutorRoutes( {ComponentePrincipal = Home} ) {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={ComponentePrincipal}/>
        <Stack.Screen name='Produtor' component={Produtor}/>

    </Stack.Navigator>
  )
}

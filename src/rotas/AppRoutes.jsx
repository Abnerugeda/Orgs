import React from 'react'
import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutorRoutes from './ProdutorRoutes';
import MelhoresProdutoresRoutes from './MelhoresProdutoresRoutes';

const Tab = createBottomTabNavigator();
export default function AppRoutes() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={ProdutorRoutes}/>
            <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRoutes}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

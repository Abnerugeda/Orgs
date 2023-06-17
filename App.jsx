import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import useProdutores from './src/hooks/useProdutores';
import AppRoutes from './src/rotas/AppRoutes';

export default function App() {
  const produtores = useProdutores(false);

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <AppRoutes/>
  </SafeAreaView>
}
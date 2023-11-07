import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import Toast from 'react-native-toast-message';
import ListaAsyncStorage from './screens/Formulários/ListaAsync/ListaAsync';

export default function App () {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <ListaAsyncStorage />
      </NavigationContainer>
      <Toast/>

    </PaperProvider>
  );
}



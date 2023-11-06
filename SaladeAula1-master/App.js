import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import Toast from 'react-native-toast-message';
import StackAlunos from './screens/Formulários/Alunos/StackAlunos';
import StackPessoas from './screens/Formulários/Pessoas/StackPessoas';

export default function App () {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <StackPessoas />
      </NavigationContainer>

      <Toast/>

    </PaperProvider>
  );
}



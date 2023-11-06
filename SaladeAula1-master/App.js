import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './routes/DrawerRoutes';
import React from 'react';
import Toast from 'react-native-toast-message';
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



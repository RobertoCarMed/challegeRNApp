import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackAplication } from './src/navigation/StackAplication';

const App = () => {
  return (
    <NavigationContainer>
      <StackAplication/>
    </NavigationContainer>
  )
}

export default App
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { DataResponse } from '../interfaces/ProductsInterface';

export type StackParams = {
  Home: undefined
  Details: {
    item: DataResponse
  }
}

const Stack = createNativeStackNavigator<StackParams>();

export const StackAplication = () => {  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

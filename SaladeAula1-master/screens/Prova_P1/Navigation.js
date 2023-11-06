import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserListScreen from './UserListScreen';
import UserProfileScreen from './UserProfileScreen';
import UserPostsScreen from './UserPostsScreen';
import RestaurantList from './RestaurantList';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="RestaurantList" component={RestaurantList} />
        <Stack.Screen name="" component={UserProfileScreen} />
        <Stack.Screen name="" component={UserPostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

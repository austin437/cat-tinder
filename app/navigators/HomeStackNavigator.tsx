import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomeScreen, MessageScreen, UserProfileScreen } from '@app/screens';

export type StackParamList = {
  Home: undefined;
  Message: { id: string };
  UserProfile: { id: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        </Stack.Navigator>
      );
};

export default HomeStackNavigator;

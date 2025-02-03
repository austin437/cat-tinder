import { CatProvider } from '@app/contexts/CatContext';
import HomeStackNavigator from '@app/navigators/HomeStackNavigator';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const navigationRef = useRef(null);

  return <NavigationContainer ref={navigationRef} theme={DefaultTheme}>
    <CatProvider>
      <GestureHandlerRootView>
        <HomeStackNavigator />
      </GestureHandlerRootView>
    </CatProvider>
  </NavigationContainer>;

}

export default App;

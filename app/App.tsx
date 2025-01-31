import React, { useRef } from 'react';

import HomeStackNavigator from '@app/navigators/HomeStackNavigator';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  const navigationRef = useRef(null);

  return <NavigationContainer ref={navigationRef} theme={DefaultTheme}>
    <HomeStackNavigator />;
  </NavigationContainer>;

}

export default App;

import React, { useRef } from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { CatScreen } from './screens';

function App(): React.JSX.Element {
  const navigationRef = useRef(null);

  return <NavigationContainer ref={navigationRef} theme={DefaultTheme}>
    <CatScreen />;
  </NavigationContainer>;

}

export default App;

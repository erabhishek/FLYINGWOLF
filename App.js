/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import InitNavigation from './source/navigation/InitNavigation';
import {NoInternet} from './source/screens/components/NoInternet';
const App = () => {
  return (
    <>
      <NoInternet />
      <InitNavigation />
    </>
  );
};

export default App;

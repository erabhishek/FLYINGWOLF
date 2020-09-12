import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home_screen/HomeScreen';
import LoginScreen from '../screens/authentication/LoginScreen';
import SplashScreen from '../screens/splash_screen/SplashScreen';
import {SideMenuNavigationOptions} from '../screens/home_screen/HomeScreen';
import {
  Provider as AuthenticationProvider,
  Context as AuthenticationContext,
} from '../context/AuthenticationContext';

import {
  Provider as TournamentProvider,
  Context as TournamentContext,
} from '../context/TournamentContext';

const Stack = createStackNavigator();

const afterLoginNavigations = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: SideMenuNavigationOptions,
  },
];

const beforeLoginNavigations = [
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
];

export default () => {
  return (
    <TournamentProvider>
      <AuthenticationProvider>
        <InitNavigation />
      </AuthenticationProvider>
    </TournamentProvider>
  );
};

const InitNavigation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    state: {isLoggedIn},
    getUserProfile,
  } = useContext(AuthenticationContext);

  const callback = (error) => {
    setIsLoaded(true);
  };
  useEffect(() => {
    getUserProfile(callback);
  }, []);

  if (!isLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => {
          return {headerShown: isLoggedIn ? true : false};
        }}>
        {isLoggedIn
          ? afterLoginNavigations.map((nav) => (
              <Stack.Screen {...nav} key={nav.name} />
            ))
          : beforeLoginNavigations.map((nav) => (
              <Stack.Screen {...nav} key={nav.name} />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*
 * Description : SplashScreen is treated as first screen of application presented to the user.
 * This can be used to perfrom basic operation like loading data for application
 */

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {PrimaryColor} from '../../constants/ColorConstant';

const SplashScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: PrimaryColor.BLACK,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 1,
    resizeMode: 'center',
  },
});

export default SplashScreen;

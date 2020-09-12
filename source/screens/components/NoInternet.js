/**
 * Node_Modules
 */
import {debounce} from 'lodash';
import normalize from 'react-native-normalize';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {View, Text, StyleSheet, Modal} from 'react-native';

/**
 * Application Components
 */

import RoundedButton from './RoundedButton';
import {GlobalConstant} from '../../constants/constant';
export const NoInternet = () => {
  const [showNoInternet, setInternetStatus] = useState(false);

  useEffect(() => {
    const handleConnectivityChange = debounce(({isInternetReachable}) => {
      setInternetStatus(!isInternetReachable);
    }, 1000);
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

    return () => {
      unsubscribe();
    };
  }, []);

  const checkConnectivityStatus = () => {
    return NetInfo.fetch().then((state) => {
      setInternetStatus(!state.isInternetReachable);
      return state;
    });
  };
  return (
    <Modal style={styles.root} visible={showNoInternet}>
      <View style={styles.container}>
        {/* <NoInternetIcon width={normalize(85)} height={normalize(85)} /> */}
        <Text style={styles.noTikcetText}>{GlobalConstant.NO_INTERNET}</Text>
        <Text style={styles.subTitle}>
          Please check your internet connection and try again.
        </Text>
        <RoundedButton
          style={styles.btn}
          title={GlobalConstant.TRY_AGAIN}
          onClickAction={checkConnectivityStatus}
          isBlueButton={true}
          isClickable={true}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: normalize(44, 'width'),
    paddingRight: normalize(44, 'width'),
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  noTikcetText: {
    color: 'white',
    fontSize: normalize(24),
    lineHeight: normalize(30),
    marginTop: normalize(26, 'height'),
  },
  subTitle: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: 'white',
    marginTop: normalize(11, 'height'),
    textAlign: 'center',
  },
  btn: {
    width: normalize(200, 'width'),
    height: normalize(50, 'height'),
    marginTop: normalize(26, 'height'),
  },
});

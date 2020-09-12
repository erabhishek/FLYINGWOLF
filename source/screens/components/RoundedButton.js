/*
 * Description : Component is used to create Rounded button
 * @param title : Button Title
 * @param isBlueButton : We have two kind of buttons while & blue display as required.
 * @param onClickAction : Handle on Click action.
 * @param isClickable : enable and disable user interaction.
 */

/**
 * Node_Modules
 */
import React from 'react';
import normalize from 'react-native-normalize';
import {PrimaryColor} from '../../constants/ColorConstant';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const RoundedButton = ({
  title,
  isBlueButton,
  onClickAction,
  isClickable,
  style = {},
  containerStyle = {},
}) => (
  <View style={style}>
    <TouchableOpacity disabled={!isClickable} onPress={onClickAction}>
      <View style={{...styles.buttonContainer, ...containerStyle}}>
        <View
          style={
            !isClickable
              ? styles.greybuttonContainer
              : isBlueButton
              ? styles.bluebuttonContainer
              : styles.whitebuttonContainer
          }>
          <Text
            style={
              isBlueButton ? styles.blueButtonText : styles.whitebuttonText
            }>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: normalize(50, 'height'),
    opacity: 1,
    marginTop: normalize(10, 'height'),
  },
  greybuttonContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(168,168,168,1)',
    borderRadius: normalize(30),
    justifyContent: 'center',
  },
  bluebuttonContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: normalize(30),
    justifyContent: 'center',
  },
  whitebuttonContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: PrimaryColor.TEXT_BACKGROUND_COLOR,
    borderRadius: normalize(30),
    borderColor: 'rgba(39,156,247,1)',
    borderWidth: 1,
    justifyContent: 'center',
  },
  whitebuttonText: {
    width: '100%',
    height: normalize(22, 'height'),
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0,1)',
    opacity: 1,
    fontSize: normalize(16),
    lineHeight: normalize(22, 'height'),
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
  },
  blueButtonText: {
    width: '100%',
    backgroundColor: 'transparent',
    color: 'black',
    opacity: 1,
    fontSize: normalize(16),
    lineHeight: normalize(22, 'height'),
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
  },
});

export default RoundedButton;

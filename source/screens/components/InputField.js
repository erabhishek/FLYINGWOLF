/*
 * Description : Created Input field Type
 * @param headerText : Text to display on top on TextField
 * @param placeholder : Input field Hint
 * @param tag : used in case of multiple input fields are used in 1 file.
 * @param editable : enable and disable user interaction.
 * @param errorMessage : Display error in the bottom of text fields.
 */

/**
 * Node_Modules
 */
import React from 'react';
import normalize from 'react-native-normalize';
import {Text, View, StyleSheet, TextInput, Platform} from 'react-native';

/**
 * Application Components
 */
import {GlobalConstant} from '../../constants/constant';
import {
  PrimaryColor,
  SecondaryColor,
  AlertColor,
} from '../../constants/ColorConstant';

const InputField = ({
  headerText,
  placeholder,
  inputTextChange,
  tag,
  editable = true,
  defaultValue,
  errorMessage = null,
  keyboardType,
  style = {},
  onBlur,
  noMarginBottom = false,
  inputType = null,
  maxLength = null,
  placeholderTextColor = '#666666',
}) => (
  <View
    style={{...styles.root, ...(noMarginBottom ? styles.noMarginBottom : {})}}>
    <View style={styles.input}>
      <Text style={styles.label}>{headerText}</Text>
      <View
        style={{
          ...styles.rectangle,
          ...(errorMessage ? styles.invalidInput : {}),
          ...(!editable ? styles.disabledInput : {}),
          ...style,
        }}>
        <TextInput
          editable={editable}
          value={defaultValue}
          style={styles.textInput}
          placeholder={placeholder}
          autoCapitalize={GlobalConstant.NONE}
          placeholderTextColor={placeholderTextColor}
          autoCorrect={false}
          maxLength={maxLength}
          onChangeText={(text) => {
            inputTextChange(tag, text);
          }}
          keyboardType={inputType !== null ? inputType : 'default'}
          onBlur={typeof onBlur === 'function' ? onBlur : undefined}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  </View>
);

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
    ...Platform.select({
      ios: {
        marginBottom: normalize(12, 'height'),
      },
      android: {
        marginBottom: normalize(16, 'height'),
      },
      default: {
        marginBottom: normalize(16, 'height'),
      },
    }),
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  textInput: {
    width: '100%',
    height: '100%',
    opacity: 1,
    color: PrimaryColor.PLACEHOLDER_TEXT_COLOR,
    fontSize: normalize(16),
    paddingLeft: normalize(15, 'width'),
  },
  disabledInput: {
    borderColor: SecondaryColor.TEXT_FIELD_BORDER_COLOR,
    backgroundColor: SecondaryColor.DISABLE_TEXT_FIELD_COLOR,
  },
  input: {
    width: '100%',
    opacity: 1,
  },
  label: {
    backgroundColor: 'transparent',
    color: 'white',
    opacity: 1,
    fontSize: normalize(14),
  },
  rectangle: {
    width: '100%',
    ...Platform.select({
      ios: {
        height: normalize(48, 'height'),
        marginTop: normalize(5, 'height'),
      },
      android: {
        height: normalize(50, 'height'),
        marginTop: normalize(6, 'height'),
      },
      default: {
        height: normalize(50, 'height'),
        marginTop: normalize(6, 'height'),
      },
    }),
    backgroundColor: PrimaryColor.TEXT_BACKGROUND_COLOR,
    borderRadius: normalize(4),
    borderColor: 'rgba(168,168,168,1)',
    borderWidth: 1,

    position: 'relative',
  },

  errorMessage: {
    backgroundColor: AlertColor.ERROR_COLOR_LIGHT,
    padding: normalize(9),
    marginTop: normalize(6, 'height'),
    color: AlertColor.ERROR_COLOR_DARK,
    fontSize: normalize(12),
  },
  invalidInput: {
    borderColor: AlertColor.ERROR_COLOR_DARK,
  },
});
export default InputField;

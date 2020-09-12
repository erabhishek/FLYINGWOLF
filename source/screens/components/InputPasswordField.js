/*
 * Description : Created Input field as Password Type with Eye button to show/hide password
 * @param headerText : Text to display on top on TextField
 * @param placeholder : Input field Hint
 * @param tag : used in case of multiple input fields are used in 1 file.
 * @param editable : enable and disable user interaction.
 * @param errorMessage : Display error in the bottom of text fields.
 */

/**
 * Node_Modules
 */
import React, {useState} from 'react';
import normalize from 'react-native-normalize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, View, TextInput, StyleSheet} from 'react-native';

/**
 * Application Components
 */
import {GlobalConstant} from '../../constants/constant';
// import ShowIcon from '../../assets/show.svg';
import {styles} from './InputField';

const InputPasswordField = ({
  headerText,
  placeholder,
  inputTextChange,
  tag,
  editable = true,
  errorMessage = null,
  inputType = null,
  placeholderTextColor = '#666666',
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  return (
    <View style={styles.root}>
      <View style={styles.input}>
        <Text style={styles.label}>{headerText}</Text>
        <View
          style={{
            ...styles.rectangle,
            ...(errorMessage ? styles.invalidInput : {}),
            ...(!editable ? styles.disabledInput : {}),
          }}>
          <TextInput
            editable={editable}
            secureTextEntry={isSecureTextEntry}
            style={{
              ...styles.textInput,
              ...passwordFieldStyles.passwordTextInput,
            }}
            placeholder={placeholder}
            autoCapitalize={GlobalConstant.NONE}
            autoCorrect={false}
            placeholderTextColor={placeholderTextColor}
            onChangeText={(text) => {
              inputTextChange(tag, text ? text.toString().trim() : null);
            }}
            keyboardType={inputType !== null ? inputType : 'default'}
          />
          <View style={passwordFieldStyles.eyeIcon}>
            <TouchableOpacity
              onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
              {/* <ShowIcon width="100%" height="100%" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const passwordFieldStyles = StyleSheet.create({
  eyeIcon: {
    position: 'absolute',
    height: normalize(16, 'height'),
    width: normalize(32, 'width'),
    top: normalize(17, 'height'),
    right: normalize(7, 'width'),
  },
  passwordTextInput: {
    paddingRight: normalize(35, 'width'),
  },
});

export default InputPasswordField;

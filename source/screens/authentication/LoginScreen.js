/*
 * Description :  Allow user to Login using Username and Password
 */

/**
 * Node_Modules
 */
import normalize from 'react-native-normalize';
import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

/**
 * Application Components
 */
import InputField from '../components/InputField';
import {ValidateLogin} from '../../utils/Validation';
import RoundedButton from '../components/RoundedButton';
import {PrimaryColor} from '../../constants/ColorConstant';
import InputPasswordField from '../components/InputPasswordField';
import {
  LoginConstant,
  KeyBoardType,
  GlobalConstant,
  localizedStrings,
} from '../../constants/constant';
import {Context as AuthenticationContext} from '../../context/AuthenticationContext';

const LoginScreen = ({navigation}) => {
  // useState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnable, enableButton] = useState(false);
  const [usernameValidation, setUsernameValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  //useContext
  const {signin} = useContext(AuthenticationContext);

  //useEffect
  useEffect(() => {
    //Validate Username and Password
    ValidateLogin(localizedStrings.USERNAME, username, setUsernameValidation);
    ValidateLogin(localizedStrings.PASSWORD, password, setPasswordValidation);
  }, [username, password]);

  const isNotNullValid = (value) => {
    if (value != null && value != undefined && value.length > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isNotNullValid(username) && isNotNullValid(password)) {
      if (
        isNotNullValid(passwordValidation) ||
        isNotNullValid(usernameValidation)
      ) {
        enableButton(false);
      } else {
        enableButton(true);
      }
    } else {
      enableButton(false);
    }
  }, [usernameValidation, passwordValidation]);

  /**
   * Manage text change in Input Field while Typing
   *
   * @param tag : Input id given by developer to different InputField
   * @param text : User's input .
   */
  const inputTextChange = (tag, text) => {
    if (tag === 1) {
      setUsername(text);
    } else if (tag === 2) {
      setPassword(text);
    }
  };

  // Return callback once login is falied
  const callback = (error) => {
    if (error.length > 0) {
      Alert.alert(localizedStrings.LOGIN_FAILED, error);
    }
  };

  const loginAction = () => {
    signin({username, password}, callback);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView>
          <Image
            style={styles.backgroundImage}
            source={require('../../assets/home_bg.png')}></Image>

          <View style={styles.loginContainer}>
            <Image
              style={styles.logoImage}
              source={require('../../assets/logo.png')}
            />
            <View style={styles.separator} />

            <InputField
              headerText={localizedStrings.USERNAME}
              placeholder={localizedStrings.USERNAME}
              inputTextChange={inputTextChange}
              tag={1}
              errorMessage={usernameValidation}
              inputType={KeyBoardType.NUMBER}
              defaultValue={username}
            />
            <InputPasswordField
              headerText={localizedStrings.PASSWORD}
              placeholder={localizedStrings.PASSWORD}
              inputTextChange={inputTextChange}
              errorMessage={passwordValidation}
              tag={2}
            />
            <View style={styles.buttonContainer}>
              <RoundedButton
                title={localizedStrings.LOGIN}
                isBlueButton={true}
                onClickAction={loginAction}
                isClickable={isButtonEnable}
              />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  loginContainer: {
    padding: normalize(20),
  },
  buttonContainer: {marginBottom: normalize(20, 'height')},
  backgroundImage: {
    position: 'absolute',
    opacity: 1,
    resizeMode: 'stretch',
    flex: 1,
  },
  logoImage: {
    opacity: 1,
    marginTop: normalize(40),
    alignSelf: 'center',
  },
  separator: {
    width: '85%',
    height: normalize(1),
    marginVertical: normalize(20),
    alignSelf: 'center',
    backgroundColor: PrimaryColor.WHITE,
  },
});

export default LoginScreen;

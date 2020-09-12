/*
 * Description : Components under this file is used to perfrom different validation on User Input .
 */

import {localizedStrings} from '../constants/constant';
export const ValidateLogin = (key, value, setErrorMessage) => {
  if (key === localizedStrings.USERNAME && value.includes('.')) {
    setErrorMessage(`${key} can not have .[Dot].`);
  } else if (value != null && value.length > 0 && value.length < 4) {
    setErrorMessage(`${key} should be greater then 3 digit`);
  } else if (value != null && value.length > 11) {
    setErrorMessage(`${key} should be less then 10 digit`);
  } else {
    setErrorMessage('');
  }
};

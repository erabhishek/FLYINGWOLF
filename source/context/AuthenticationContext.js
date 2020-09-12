import createDataContext from './createDataContext';
import {navigate} from '../navigation/NavigationReference';
import apiRequest from '../api/request';
import {get} from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import {act} from 'react-test-renderer';

const authenticationContextReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
    case 'getUserProfile':
      return {
        username: action.username,
        name: action.name,
        tournamentsPlayed: action.tournamentsPlayed,
        tournamentsWon: action.tournamentsWon,
        profilePicture: action.profilePicture,
        rating: action.rating,
        isLoggedIn: true,
      };

    case 'signout':
      return {
        username: '',
        name: '',
        tournamentsPlayed: 0,
        tournamentsWon: 0,
        profilePicture: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const signin = (dispatch) => async ({username, password}, callback) => {
  try {
    const response = await apiRequest.post('/bluestacks', {username, password});
    await AsyncStorage.setItem('username', username);

    const status = get(response, 'data.statusCode');

    if (status === 200) {
      const name = get(response, 'data.data.name');
      const tournamentsPlayed = get(response, 'data.data.tournamentsPlayed');
      const tournamentsWon = get(response, 'data.data.tournamentsWon');
      const profilePicture = get(response, 'data.data.profilePicture');
      const rating = get(response, 'data.data.rating');

      dispatch({
        type: 'signin', //signin
        username: username,
        name: name,
        tournamentsPlayed: tournamentsPlayed,
        tournamentsWon: tournamentsWon,
        profilePicture: profilePicture,
        rating: rating,
      });
      if (callback) {
        callback('');
      }
    } else {
      if (callback) {
        callback('Invalid Username and Password');
      }
    }
  } catch (err) {
    if (callback) {
      callback('Something went wrong, Please try again');
    }
  }
};
const getUserProfile = (dispatch) => async (callback) => {
  const username = await AsyncStorage.getItem('username');
  try {
    const response = await apiRequest.post('/bluestacks/profile/', {
      username,
    });

    const status = get(response, 'data.statusCode');

    if (status === 200) {
      const name = get(response, 'data.data.name');
      const tournamentsPlayed = get(response, 'data.data.tournamentsPlayed');
      const tournamentsWon = get(response, 'data.data.tournamentsWon');
      const profilePicture = get(response, 'data.data.profilePicture');
      const rating = get(response, 'data.data.rating');

      dispatch({
        type: 'getUserProfile', //signin
        username: username,
        name: name,
        tournamentsPlayed: tournamentsPlayed,
        tournamentsWon: tournamentsWon,
        profilePicture: profilePicture,
        rating: rating,
      });
      if (callback) {
        callback('');
      }
    } else {
      if (callback) {
        callback('Invalid Username and Password');
      }
    }
  } catch (err) {
    if (callback) {
      callback('Something went wrong, Please try again');
    }
  }
};

const signout = (dispatch) => async (callback) => {
  AsyncStorage.removeItem('username');
  dispatch({
    type: 'signout',
  });
};
export const {Provider, Context} = createDataContext(
  authenticationContextReducer,
  {signin, getUserProfile, signout},
  {
    isLoggedIn: false,
    username: '',
    name: '',
    tournamentsPlayed: 0,
    tournamentsWon: 0,
    rating: '',
    profilePicture: '',
  },
);

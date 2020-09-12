import createDataContext from './createDataContext';
import {get} from 'lodash';
import axios from 'axios';

const tournamentContextReducer = (state, action) => {
  switch (action.type) {
    case 'tournaments':
      return {
        tournaments: [...state.tournaments, ...action.tournaments],
        cursor: action.cursor,
      };
    default:
      return state;
  }
};

const getTournaments = (dispatch) => async (cursor) => {
  try {
    let searchUrl =
      'http://tournaments-dot-game-tv-prod.uc.r.appspot.com/tournament/api/tournaments_list_v2?limit=10&status=all';

    if (cursor.length > 0) {
      searchUrl = `${searchUrl}&cursor=${cursor}`;
    }
    const instance = axios.create();
    instance.defaults.timeout = 2500;
    instance
      .get(searchUrl)
      .then(({data}) => {
        const tournaments = get(data, 'data.tournaments');
        const cursor = get(data, 'data.cursor');

        dispatch({
          type: 'tournaments',
          tournaments,
          cursor,
        });
      })
      .catch(function (error) {
        console.log('Error AB', error);
      });
  } catch (error) {
    console.log('Error AB: ', error);
  }
};

export const {Provider, Context} = createDataContext(
  tournamentContextReducer,
  {getTournaments},
  {tournaments: [], cursor: ''},
);

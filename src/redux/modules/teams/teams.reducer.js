import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { teamsActionsTypes } from './teams.actions';

const StateRecord = new Record({
  list: List(),
  error: null,
});

const INITIAL_STATE = new StateRecord();

const teamsSuccess = (state, action) => state.set('list', fromJS(action.payload.teams));
const teamsError = (state, action) => state.set('error', action.payload.error);

export default createReducer(INITIAL_STATE, {
  [teamsActionsTypes.GET_TEAMS_SUCCESS]: teamsSuccess,
  [teamsActionsTypes.GET_TEAMS_ERROR]: teamsError,
});
import { ReducerActionsTypes } from './../types/types';
import React, { Dispatch } from 'react';
import { GlobalState } from '../types/types';

export const initialState: GlobalState = {
  dataIsLoad: false,
  isFirstSearch: true,
  userInfo: null,
  repoInfo: [],
};

export const AppContext = React.createContext<{
  state: GlobalState;
  dispatch: Dispatch<ReducerActionsTypes>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

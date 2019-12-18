import {createReducer, on} from '@ngrx/store';
import {clearServices, setAllServices} from './system.actions';
import {Action} from 'redux';
import {ServiceView} from '../models/serviceView.model';

export const SYSTEM_FEATURE_NAME = 'systemState';

export interface SystemFeatureState {
  services: ServiceView[] | undefined;
}

export const initialState: SystemFeatureState = {
  services: undefined
};

export const systemReducer = createReducer(initialState,
  on(setAllServices, (state, action) => ({...state, services: action.services})),
  on(clearServices, (state) => ({...state, services: initialState.services}))
);

export function reducer(state: any, action: Action) {
  return systemReducer(state, action);
}

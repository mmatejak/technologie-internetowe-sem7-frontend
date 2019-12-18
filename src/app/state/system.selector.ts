import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SYSTEM_FEATURE_NAME, SystemFeatureState} from './system.reducer';

const selectFeature = createFeatureSelector(SYSTEM_FEATURE_NAME);

export const getAllServices = createSelector(selectFeature, (state: SystemFeatureState) => state.services);

import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Tutorial } from 'src/app/model/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions'
import { ServicesState, AppState } from '../app.store';

const intialState = {
    allServicesLoaded: false,
    data: null
}

export function reducer(state: Tutorial[] = [], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.LOADSERVICES:
            return {
                allServicesLoaded: true,
                data: action.payload
            };
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.SEARCH_TUTORIAL:
            return state.filter(item => {
                if (action.payload.name.toLowerCase() != '') {
                    return (item.name).toLowerCase().includes(action.payload.name.toLowerCase())
                }
            });
        case TutorialActions.CLEAR_TUTORIAL:
            return [...state, action.payload];
        default:
            return state
    }
}

const getServices = createFeatureSelector<AppState, ServicesState>('tutorial');

export const getAllServices = createSelector(getServices, state => state.data);
export const getAllServicesLoaded = createSelector(getServices, state => state.allServicesLoaded);

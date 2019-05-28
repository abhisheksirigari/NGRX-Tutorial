import { Action } from '@ngrx/store'
import { Tutorial } from 'src/app/model/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions'

const initialState: Tutorial = {
    name: '',
    description: '',
    active: false
}

export function reducer(state: Tutorial[] = [], action: TutorialActions.Actions) {
    switch (action.type) {
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
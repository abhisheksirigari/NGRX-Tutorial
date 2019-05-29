import { Action } from '@ngrx/store';
import { Tutorial } from 'src/app/model/tutorial.model';

export const LOADSERVICESREQUESTED = '[Services API] Load Services Requested'
export const LOADSERVICES = '[Services API] Load Services'
export const LOADINACTIVESERVICESREQUESTED = '[Services API] Load Inactive Services Requested'
export const LOADINACTIVESERVICES = '[Services API] Load Inactive Services'
export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const SEARCH_TUTORIAL = '[TUTORIAL] Search'
export const CLEAR_TUTORIAL = '[TUTORIAL] Clear'

export class LoadServicesRequested implements Action {
    readonly type = LOADSERVICESREQUESTED;
};

export class LoadServices implements Action {
    readonly type = LOADSERVICES;
    
    constructor(public payload: Tutorial[]) { }
}

export class LoadInactiveServicesRequested implements Action {
    readonly type = LOADINACTIVESERVICESREQUESTED;
};

export class LoadInactiveServices implements Action {
    readonly type = LOADINACTIVESERVICES;
    
    constructor(public payload: Tutorial[]) { }
}


export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) { }
}

export class SearchTutorial implements Action {
    readonly type = SEARCH_TUTORIAL

    constructor(public payload: { name: string }) { }
}

export class ClearTutorial implements Action {
    readonly type = CLEAR_TUTORIAL

    constructor(public payload: number) { }
}

export type Actions = LoadServicesRequested | LoadServices | LoadInactiveServicesRequested | LoadInactiveServices | AddTutorial | ClearTutorial | SearchTutorial
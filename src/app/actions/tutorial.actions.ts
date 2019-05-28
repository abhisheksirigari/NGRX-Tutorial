import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from 'src/app/model/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const SEARCH_TUTORIAL = '[TUTORIAL] Search'
export const CLEAR_TUTORIAL = '[TUTORIAL] Clear'

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

    constructor(public payload: number) {}
}

export type Actions = AddTutorial | ClearTutorial | SearchTutorial
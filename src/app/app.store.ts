import { Tutorial } from './model/tutorial.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}

export interface ServicesState {
    allServicesLoaded: boolean;
    data: Tutorial[] | null;
}

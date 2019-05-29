import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.store';
import { LoadServicesRequested } from './actions/tutorial.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<AppState>) {}

  ngOnInit() { 
    // this.store.dispatch(new LoadServicesRequested());
  }

}

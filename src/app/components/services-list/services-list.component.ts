import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as TutorialActions from '../../actions/tutorial.actions';
import { AppState } from '../../app.state';

import { AppSettingsService } from '../../services/app-settings.service';
import { Tutorial } from '../../model/tutorial.model';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  appData: any;

  searchModel: any;

  headingdata: any;
  searchBar: any;
  serviceProvidersList: any;

  tutorials: Observable<Tutorial[]>;

  constructor(
    private store: Store<AppState>,
    private appSettingsService: AppSettingsService
  ) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
    this.loadServicesdata();
  }

  loadServicesdata() {
    this.appSettingsService.getServices().subscribe(data => {
      this.appData = data;
      this.headingdata = data.components[0];
      this.searchBar = data.components[1];
      this.serviceProvidersList = data.components[2].content.list;

      this.appSettingsService.getInactiveServices().subscribe(data => {
        this.serviceProvidersList.forEach((elem: any) => {
          elem.active = false;
          const elemName = elem.name;
          for (let i = 0; i < data.inactiveServices.length; i++) {
            if (elemName.toLowerCase().indexOf(data.inactiveServices[i].toLowerCase()) > -1) {
              elem.active = true;
            }
          }
          this.addTutorial(elem.name, elem.description, elem.active);
        });
      });
    });
  }

  addTutorial(name, description, active) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, description: description, active: active }));
  }

  searchItems(searchModel: any) {
    this.store.dispatch(new TutorialActions.SearchTutorial({ name: searchModel }));
  }

}


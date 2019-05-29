import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http: HttpClient) { }

  public getServices(): Observable<any> {
    return this.http.get("./assets/page.json").pipe( 
      map(res => 
        res || []
      )        
    );
  }

  public getInactiveServices(): Observable<any> {
    return this.http.get(`./assets/inactive-service-providers.json`).pipe( map(res => res || []) );
  }
}

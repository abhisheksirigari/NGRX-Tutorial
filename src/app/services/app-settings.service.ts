import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http: HttpClient) { }

  public getServices(): Observable<any> {
    return this.http.get("./assets/page.json");
  }

  public getInactiveServices(): Observable<any> {
    return this.http.get("./assets/inactive-service-providers.json");
  }
}

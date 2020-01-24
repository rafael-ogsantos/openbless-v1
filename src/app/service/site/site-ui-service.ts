import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SiteUIService {

  // for My Localhost Work
  // private httpRequestsUrl: string = "http://marketingob-laravel.ahsan/api/";
  // for Live Site Process
  //private httpRequestsUrl: string = "http://blessedmarketingdigital.com.br/api/";
  private httpRequestsUrl: string = "http://127.0.0.1:8000/api/";

  isLoading = new Subject<boolean>();

  regions = ['Delaware', 'Florida', 'Georgia', 'Maryland', 'North Carolina'];
 
    // selected: '',
    periodo:any =  [
      { title: 'Todos', value: '' },
      { title: 'Casa condomínio', value: 'condominio' },
      { title: 'Casa', value: 'casa' }
    ];
   

  getRegions() {
    return this.regions;
  }

  getPeriodo() {
    console.log(this.periodo.title);
  }

  getHttpRequestUrl() {
    return this.httpRequestsUrl;
  }

}

import { AuthService } from 'src/app/service/auth/auth-service';
import { SiteUIService } from 'src/app/service/site/site-ui-service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor(
    private _http: HttpClient,
    private _siteUiService: SiteUIService,
    private _authService: AuthService
  ) { }

  addMessages(data){
    return this._http.post<any>(
      this._siteUiService.getHttpRequestUrl() + 'add-messages',
      data
    )
  }
}

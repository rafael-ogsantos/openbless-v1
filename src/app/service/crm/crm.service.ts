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
    const dados = localStorage.getItem('userDetails')
      const obj = JSON.parse(dados);

      data.email = obj.email

    return this._http.post<any>(
      this._siteUiService.getHttpRequestUrl() + 'add-messages',
      data
    )
  }

  getMails(data){
    return this._http.post<any>(
      this._siteUiService.getHttpRequestUrl() + 'get-mails',
      data
    )
  }

  teste(data){
    return this._http.post<any>(
      this._siteUiService.getHttpRequestUrl() + 'teste',
      data
    )
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth-service';

import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SiteUIService } from 'src/app/service/site/site-ui-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  error: string = "";
  actionObservable: Observable<any>;
  loadingSubs: Subscription;
  isLoading: boolean = false;

  constructor(private _authService: AuthService, private router: Router, private _siteUiService: SiteUIService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.loginInputs();
    this.loadingSubs = this._siteUiService.isLoading.subscribe(
      state => {
        this.isLoading = state;
      }
    )
  }

  
  // checkLogin( ev, el ) {
  //   let data;
  //   ev.preventDefault();

  //   // Captura as informações de login
  //   data = this.Serialize(el);
  //   console.log(data);

  //   this.openSnackBar({
  //     text:  'Os dados informados estão incorretos !', // Mensagem do snackbar
  //     // button: 'Fechar', // Mensagem no botão de fechar
  //     status: false, // or false (Status do login)
  //     duration: 4000, // Tempo pra fechar
  //     position: [
  //       'end', // 'start' | 'center' | 'end' | 'left' | 'right'
  //       'bottom' // 'top' | 'bottom'
  //     ]
  //   });

  // }

  // Função para serializar os campos do formulário
  // private Serialize(el) {
  //   let i, ch, vl, v; v = {};
  //     for (i = 0; i < el.length - 1; i++) {
  //       ch = el[i], vl = el[i].type === ('checkbox' || 'radio') ? el[i].checked : el[i].value;
  //       v[el[i].name] = vl;
  //     }
  //     return v;
  // }

  // Função para invocar o Snackbar
  // private openSnackBar( data: any ) {
  //   data = data ? data : {};

  //   data.text = data.text ? data.text : 'Sem mensagem';
  //   this.snackBar.open(data.text, data.button, {
  //     panelClass: 'login-' + (data.status ? 'success' : 'error'),
  //     duration: data.duration ? data.duration : null,
  //     horizontalPosition: data.position[0] ? data.position[0] : null,
  //     verticalPosition: data.position[1] ? data.position[1] : null,
  //   });
  // }

  // inputs: any = [];
  // private loginInputs() {

  //   // Input Email
  //   this.inputs.push({
  //     type: 'email',
  //     name: 'email',
  //     placeholder: 'E-mail',
  //     value: 'email@dyogophoenix.com.br'
  //   });

  //   // Input Password
  //   this.inputs.push({
  //     type: 'password',
  //     name: 'pswd',
  //     placeholder: 'Senha',
  //     value: 'dfsefefse'
  //   });
  // }

  onSubmit(form: NgForm) {
    
    this._siteUiService.isLoading.next(true);
    this._authService.signIn(form.value).subscribe(
      data => {
        // console.log("new coming data (from signIn component) = ", data);
        this._siteUiService.isLoading.next(false);
        this.router.navigate(['/']);
      },
      error => {
        this._siteUiService.isLoading.next(false);
        this.error = error;
      }
    )
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }

}

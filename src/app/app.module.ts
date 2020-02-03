import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './module/material-module/material-module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { SignInComponent } from './component/auth/sign-in/sign-in.component';

import { HeaderComponent } from './component/navigation/header/header.component';
import { SideBarComponent } from './component/navigation/side-bar/side-bar.component';

import { UserComponent } from './component/user/user.component';
import { AddUserComponent } from './component/user/add-user/add-user.component';
import { EditUserComponent } from './component/user/edit-user/edit-user.component';
import { AllUserComponent } from './component/user/all-user/all-user.component';
import { ClientSearchComponent } from './component/client/client-search/client-search.component';
import { PropertyComponent } from './component/property/property.component';
import { PropertyAddComponent } from './component/property/property-add/property-add.component';
import { PropertyEditComponent } from './component/property/property-edit/property-edit.component';
import { ChartsModule } from 'ng2-charts';
import { AsideComponent } from './component/aside/aside.component';
import { LayoutComponent } from './component/navigation/layout/layout.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { CrmComponent } from './crm/crm/crm.component';
import { ListEmailsSectorsComponent } from './crm/list-emails-sectors/list-emails-sectors.component';
import { MatSnackBar } from '@angular/material';
import { Crm2Component } from './crm/novo/crmNovo.component';
import { CrmemAndamentoComponent } from './crm/emAndamento/emAndamento.component';
import { tendersPendente } from './component/tenders/pendente/tendersPending.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    AllUserComponent,
    ClientSearchComponent,
    PropertyComponent,
    PropertyAddComponent,
    PropertyEditComponent,
    AsideComponent,
    LayoutComponent,
    CrmComponent,
    tendersPendente,
    Crm2Component,
    CrmemAndamentoComponent,
    ListEmailsSectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    MatSnackBar,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

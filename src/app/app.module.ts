import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LigaMXComponent } from './liga-mx/liga-mx.component';
import { NflComponent } from './nfl/nfl.component';
import { NbaComponent } from './nba/nba.component';
import { MlbComponent } from './mlb/mlb.component';
import { ChampionsLeagueComponent } from './champions-league/champions-league.component';
import { PicksLigamxComponent } from './liga-mx/picks-ligamx/picks-ligamx.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { RegisterModalContentComponent } from './register-modal/register-modal-content/register-modal-content.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginModalContentComponent } from './login-modal/login-modal-content/login-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LigaMXComponent,
    NflComponent,
    NbaComponent,
    MlbComponent,
    ChampionsLeagueComponent,
    PicksLigamxComponent,
    RegisterModalComponent,
    RegisterModalContentComponent,
    LoginModalComponent,
    LoginModalContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterModalComponent,
    LoginModalComponent
  ]
})
export class AppModule { }

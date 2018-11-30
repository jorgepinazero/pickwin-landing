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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LigaMXComponent,
    NflComponent,
    NbaComponent,
    MlbComponent,
    ChampionsLeagueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

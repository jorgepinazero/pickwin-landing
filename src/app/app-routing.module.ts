import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {LigaMXComponent} from './liga-mx/liga-mx.component';
import {NflComponent} from './nfl/nfl.component';
import {NbaComponent} from './nba/nba.component';
import {MlbComponent} from './mlb/mlb.component';
import {ChampionsLeagueComponent} from './champions-league/champions-league.component';

const appRoutes: Routes = [
  {path: '', component: LigaMXComponent},
  {path: 'nfl', component: NflComponent},
  {path: 'nba', component: NbaComponent},
  {path: 'mlb', component: MlbComponent},
  {path: 'champions', component: ChampionsLeagueComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

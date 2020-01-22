import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { IsAuthenticatedGuardService } from './guards/is-authenticated-guard.service';
import { IsNotAuthenticatedGuardService } from './guards/is-not-authenticated-guard.service';
import { LogoutComponent } from './logout/logout.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent, canActivate: [IsNotAuthenticatedGuardService] },
  { path: 'game', component: GameComponent, canActivate: [IsAuthenticatedGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [IsAuthenticatedGuardService] },
  { path: 'scoreboard', component: ScoreboardComponent },
];

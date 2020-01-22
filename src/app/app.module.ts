import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './store/reducers/app.reducers';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { appRoutes } from './app.routes';
import { IsAuthenticatedGuardService } from './guards/is-authenticated-guard.service';
import { IsNotAuthenticatedGuardService } from './guards/is-not-authenticated-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    ScoreboardComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [IsAuthenticatedGuardService, IsNotAuthenticatedGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

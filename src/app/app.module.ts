import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/test', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

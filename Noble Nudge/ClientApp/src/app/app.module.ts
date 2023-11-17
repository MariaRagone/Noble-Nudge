import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserComponent } from './Components/user/user.component';
import { ShareComponent } from './Components/share/share.component';
import { NobeFormComponent } from './Components/nobe-form/nobe-form.component';
import { NobeListComponent } from './Components/nobe-list/nobe-list.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NobeComponent } from './Components/nobe/nobe.component';
import { NobesPageComponent } from './Components/nobes-page/nobes-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UserComponent,
    ShareComponent,
    NobeFormComponent,
    NobeListComponent,
    CategoriesComponent,
    NobeComponent,
    NobeListComponent,
    NobesPageComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'add-nobe', component: NobeFormComponent },
      { path: 'nobes-list', component: NobeListComponent },
      { path: 'all-categories', component: CategoriesComponent },
      { path: 'nobe', component: NobeComponent},
      { path: 'nobes-page', component: NobesPageComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './shared/list/list.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {GuardsService} from './core/guards.service';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './shared/menu/menu.component';
import {ToastrModule} from 'ngx-toastr';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [GuardsService]},
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SpinnerComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [GuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

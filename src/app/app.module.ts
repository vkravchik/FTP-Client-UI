import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressSpinnerModule, MatRippleModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './shared/list/list.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {GuardsService} from './core/guards.service';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './shared/menu/menu.component';
import {ToastrModule} from 'ngx-toastr';
import { ConnectionTableComponent } from './components/connection-table/connection-table.component';
import { ConnectionFormComponent } from './shared/connection-form/connection-form.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'connection', component: ConnectionTableComponent},
  {path: '', component: HomeComponent, canActivate: [GuardsService]},
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SpinnerComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ConnectionTableComponent,
    ConnectionFormComponent
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
    FormsModule,
    MatRippleModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [GuardsService],
  bootstrap: [AppComponent],
  entryComponents: [ConnectionFormComponent]
})
export class AppModule { }

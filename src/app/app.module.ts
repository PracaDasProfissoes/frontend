import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//angular
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule, MatHorizontalStepper, MatStepperModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrarComponent } from './registrar/registrar.component';
import { NgxMaskModule } from 'ngx-mask';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    MatCardModule,MatTabsModule,
    FormsModule, ReactiveFormsModule,MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxMaskModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ResponseFormComponent } from './response-form/response-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveRegisterFormComponent } from './reactive-register-form/reactive-register-form.component';
import { PhoneValidatorDirective } from './directive/phone-validator.directive';
import { EqualValidatorDirective } from './directive/equal-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ResponseFormComponent,
    ReactiveRegisterFormComponent,
    PhoneValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

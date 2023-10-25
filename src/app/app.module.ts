import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassowordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthChecklistComponent } from './password-strength-checklist/password-strength-checklist.component';

@NgModule({
  declarations: [
    AppComponent,
    PassowordStrengthBarComponent,
    PasswordStrengthChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

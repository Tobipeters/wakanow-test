import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { FirebaseService } from './service/firebase.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserListComponent,
    UserCardComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDqDJwm1upfZsx2Nj5qp5r2QrBHftDMgDU',
      authDomain: 'wakanow-test-auth.firebaseapp.com',
      projectId: 'wakanow-test-auth',
      storageBucket: 'wakanow-test-auth.appspot.com',
      messagingSenderId: '347954119850',
      appId: '1:347954119850:web:7ecec1ee88d81c912e3cd3',
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}

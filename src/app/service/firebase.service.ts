import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { TSIgnUpCred } from '../model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isSuccess: boolean = false;

  constructor(
    public firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  async signUp(userDetails: TSIgnUpCred) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      .then(() => {
        this.isSuccess = true;
      });
  }


  getAllUsers(): Observable<firebase.default.User[] | any> {
    return this.firebaseAuth.authState;
  }

  getApprovedUsers() {
    return this.firestore.collection('users', (ref) => ref.where('approved', '==', true)).valueChanges();
  }


}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}
    
    sigupUser(email: string, password: string) {
        console.log('registering...');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => console.log(response)
        )
        .catch(
            error => console.log(error)
        );
    }

    siginUser(email: string, password: string) {
        console.log('loggin...');
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => { 
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then((token: string) => {
                    this.token = token;
                })
            }
        )
        .catch(
            (error) => { console.log(error); }
        );
    }

    getToken() {
        firebase.auth().currentUser.getToken()
        .then(
            (response) => { firebase.auth().currentUser.getIdToken()
                .then((token: string) => {
                    this.token = token;
                })
            }
        );
        return this.token;
    }

    checkToken() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}
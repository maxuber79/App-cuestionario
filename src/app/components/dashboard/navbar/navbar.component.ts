import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(private afAuth: AngularFireAuth, private router: Router) {
		console.log('%c constructor()','background: #d1e7dd; color: #0f5132; padding: 2px 5px;');
	}

	ngOnInit(): void {
		
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		console.log('%c ngOnInit()','background: #d1e7dd; color: #0f5132; padding: 2px 5px;');
		
	}

	logout() {
		console.log('%c logout()','background: #d1e7dd; color: #0f5132; padding: 2px 5px;');
		this.afAuth.signOut(); // Metodo de logOut
		localStorage.removeItem('user');
		this.router.navigate(['/']);
	}
}

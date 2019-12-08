import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private _router: Router) {
        
    }

    login(user: string, password: string) {
        //validar en el servidor si el usuario y password son válidos.
        //en el caso que sean válidos se deberian retornar los roles que tiene asociado dicho usuario
        //se podría encriptar el nombre de la variable
        if(user == "admin" && password == "admin"){
            localStorage.setItem('user', user);
            localStorage.setItem('roles', JSON.stringify(['admin']));
            this._router.navigate(['/home']);
        }else if(user == "jose" && password == "jose"){
            localStorage.setItem('user', user);
            localStorage.setItem('roles', JSON.stringify(['tutor']));
            this._router.navigate(['/home']);
        }else if(user == "user" && password == "user"){
            localStorage.setItem('user', user);
            localStorage.setItem('roles', JSON.stringify(['evaluador']));
            this._router.navigate(['/home']);
        }else{
            console.log("error no hay usuario");
            this._router.navigate(['/']);
        }
    }

    logout() {
        localStorage.clear();
        this._router.navigate(['/']);
    }

    isAuthenticated(): boolean {
        return localStorage.getItem('user')!=null;
    }

    hasRole(rol: string): boolean {
        if (!this.isAuthenticated()) return false;
        let roles: string[] = JSON.parse(localStorage.getItem('roles'));
        return roles.indexOf(rol) >= 0;
    }

    getUserName(): string {
        return localStorage.getItem('user') != null ? localStorage.getItem('user'):'Anonimo';
    }
}
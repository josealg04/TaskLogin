import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*private isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn = false;
   }

   setUserLoggedIn(){
     this.isUserLoggedIn= true;
     this.username='admin';
   }

   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }*/

   constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

     /** POST: add a new task to the server */
     addTask(user: User): Observable<User> {
      return this.http.post<User>(this.baseUrl + 'api/User', user, httpOptions).pipe(
        tap((newUser: User) => this.log(`added NewUser w/ id=${newUser.id}`)),
        catchError(this.handleError<User>('addUser'))
      );
    }
  
    /** GET Task from the server */
    getAll(): Observable<User[]> {
      return this.http.get<User[]>(this.baseUrl + 'api/User').pipe(
        tap(_ => this.log('Se Consulta la información')),
        catchError(this.handleError<User[]>('getAll', []))
      );
    }
  
    /** GET task by id. Will 404 if id not found */
    get(id: number): Observable<User> {
      const url = `${this.baseUrl + 'api/User'}/${id}`;
      return this.http.get<User>(url).pipe(
        tap(_ => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getHero id=${id}`))
      );
    }
  
    /** PUT: update the Task on the server */
    update(user: User): Observable<any> {
      const url = `${this.baseUrl + 'api/User'}/${user.id}`;
      return this.http.put(url, user, httpOptions).pipe(
        tap(_ => this.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('user'))
      );
    }
  
    /** DELETE: delete the task from the server */
    delete(user: User | number): Observable<User> {
      const id = typeof user === 'number' ? user : user.id;
      const url = `${this.baseUrl + 'api/User'}/${id}`;
      return this.http.delete<User>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted user id=${id}`)),
        catchError(this.handleError<User>('deleteUser'))
      );
    }
  
  
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      alert(`TaskService: ${message}`);
    }
  
}

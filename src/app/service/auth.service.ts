import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  
    private http: HttpClient
    ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://personalblogwesley.herokuapp.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/usuario-controller/authentication', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://personalblogwesley.herokuapp.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/usuario-controller/postUsuario', User)

  }
}

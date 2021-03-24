import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44348/api/auth';

  constructor(private httpClient:HttpClient) { }

  login(LoginModel:LoginModel){
    return this.httpClient.post(this.apiUrl+"login",LoginModel)
  }
}

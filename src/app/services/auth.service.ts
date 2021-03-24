import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-response-model';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44348/api/auth/';

  constructor(private httpClient: HttpClient) {}

  login(LoginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', LoginModel);
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "src/app/utils/api";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private url = `${BASE_URL}login`;

  constructor(private http: HttpClient) {}

  public login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.url, data).pipe(
      map((token) => {
        localStorage.setItem("access_token", JSON.stringify(token));
        return token;
      }),
      catchError((err) => {
        if (err.status === 401) {
          this.logout();
          return of(err);
        }
        throw err;
      })
    );
  }

  public logout() {
    localStorage.removeItem("access_token");
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem("access_token");
  }

  public getUserInfo(): Observable<any> {
    const token = JSON.parse(localStorage.getItem("access_token"));
    const headers = {
      Authorization: token.access_token,
    };
    return this.http.get<any>(`${BASE_URL}users/me`, { headers });
  }
}

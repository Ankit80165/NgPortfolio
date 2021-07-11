import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  contact(name: string, email: string, subject: string, message: string) {
    const payload = {
      name,
      email,
      subject,
      message,
    };

    return this.http.post(
      'https://contactapiforcv.herokuapp.com/contact',
      payload
    );
  }
}

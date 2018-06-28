import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from './contact-form.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }

  submitContactForm(form: ContactForm): Observable<any> {
    return this.http.post('/contact/short-form', form);
  }
}

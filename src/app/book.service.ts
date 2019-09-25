import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiURL}/book`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Book {
  title: string;
  author: string;
  year: number;
  id: number;
}

@Injectable({providedIn: 'root'})
export class BookService {
  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<[Book]> {
    // @ts-ignore
    return this.http.get('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');
  }
}

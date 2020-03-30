import {Component, OnInit} from '@angular/core';
import {Book, BookService} from './Book.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  filterResult: Book[] = [];
  filter = [];

  constructor(private bookService: BookService, private fb: FormBuilder) {
    this.filter = [
      {text: 'id', control: new FormControl('')},
      {text: 'title', control: new FormControl('')},
      {text: 'author', control: new FormControl('')},
      {text: 'year', control: new FormControl('')}];
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((value => {
      this.books = value.reduce((acc, curr, index) => {
        acc[index] = {...curr, id: index};
        return acc;
      }, []);
      console.log(this.books);
      this.filterResult = this.books;
    }));
    this.filter[0].control.valueChanges.subscribe((value => {
      this.filterResult = this.books.filter((book, index) => book.id.toString().includes(value));
    }));
    this.filter[1].control.valueChanges.subscribe((value => {
      console.log(value);
      this.filterResult = this.books.filter((book, index) => book.title.includes(value));
    }));
    this.filter[2].control.valueChanges.subscribe((value => {
      this.filterResult = this.books.filter((book, index) => book.author.includes(value));
    }));
    this.filter[3].control.valueChanges.subscribe((value => {
      this.filterResult = this.books.filter((book, index) => book.year.toString().includes(value));
    }));
  }

}

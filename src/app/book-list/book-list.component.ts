import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from "rxjs";
import { BookService } from "./../book.service";
import { Book } from "./../book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private bookService: BookService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.books = this.bookService.getBookList()
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(id: number){
    this.router.navigate(['book', id]);
  }

  updateBook(id: number){
    this.router.navigate(['update', id]);
  }

}

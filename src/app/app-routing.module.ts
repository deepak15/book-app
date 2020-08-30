import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'bookList', pathMatch: 'full' },
  { path: 'bookList', component: BookListComponent },
  { path: 'add', component: CreateBookComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'update/:id', component: UpdateBookComponent },
  { path: 'delete/:id', component: BookDetailsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  /**
   * getBook
   */
  public getBook() {
    console.log("logging...getBook.")
  }
}

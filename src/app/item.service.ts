import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  todos = [
    {
      id: '0001',
      name: 'go to class',
      detail: '8:30 AM class of mobile application development.'
    },
    {
      id: '0002',
      name: 'go to markeet',
      detail: 'after class of MAD go to markeet to repair the laptop.'
    },
    {
      id: '0003',
      name: 'go to office',
      detail: '2:30 PM go to office.'
    },
    {
      id: '0004',
      name: 'submit Assignment',
      detail: 'Today at 12:00 AM Dead line to submit assignment of mobile application development.'
    }
  ] ;
  constructor() { }

  getToDos() {
    return this.todos;
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public items = [];
  constructor(
      private router: Router,
      private listTodos: ItemService
  ) { }

  ngOnInit() {
    this.items = this.listTodos.getToDos();
  }
    addItem() {
      console.log('test');
      this.router.navigate(['add-todo']);
      console.log('after call');
    }

  showSingleItem(item: any) {
    const id = item.id.substring(0, 4);
    const url = `${id}`;
    this.router.navigateByUrl(url);
  }
}

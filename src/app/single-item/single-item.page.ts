import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private todoList: ItemService) { }

  todos = [];
  todo: any;
  ngOnInit( ) {
    this.todos = this.todoList.getToDos();
    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('single-item');

      this.todo = this.todos.find(obj => {
        return obj.id.includes(val);
      });
    });
  }
}

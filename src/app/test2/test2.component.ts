import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.sass']
})
export class Test2Component implements OnInit {

  title = 'angular-test2';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {
  
  title = 'angular-error';
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.scss']
})
export class MainwindowComponent implements OnInit {
  ischecked=true;
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  Colors=[
    {id:1,name:'Red'},
    {id:2,name:'Green'},
    {id:3,name:'Blue'},
  ]

  constructor() { }

  ngOnInit() {
  }

}

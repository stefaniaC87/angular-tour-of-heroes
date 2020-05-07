import { Component, OnInit, Input} from '@angular/core';
//import {Input } from  '../hero';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})


export class TitleComponent implements OnInit {
@Input() hero : hero;
  constructor() { 
    title: string 'ciao';
  }

  ngOnInit(): void {
  }

}

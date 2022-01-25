import { Component, Input, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-balls-skills',
  templateUrl: './balls-skills.component.html',
  styleUrls: ['./balls-skills.component.scss']
})
export class BallsSkillsComponent implements OnInit {
  @Input('type') type = 'big';


  constructor() { }

  ngOnInit(): void {
  }
 
}

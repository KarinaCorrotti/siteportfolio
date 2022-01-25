import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproject } from './projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    @Input() projectList: Iproject[] = []
    @Input() projectNumber: number = 3 

  constructor() { }

  ngOnInit(): void {
      console.log(this.projectList)
  }  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  name: string;
  email: string;
  text: string;
  message: string;  
  number = 2;
  public projectList = require('../../listProjects.json'); 

  constructor(private router:Router) { }

  ngOnInit(): void {
    window.onscroll = ()=>{this.scrollFunction()};
  }
  anchor(id){
    this.router.navigate(['/'], {fragment:id});
  }
  scrollFunction(){
    // const screenHeight = document.documentElement.scrollHeight;
    // const contact = document.getElementById("contact").offsetTop;
    // const portfolio = document.getElementById("portfolio").offsetTop;
    const element: HTMLElement = document.getElementById("about");
    const elementPositions = element.getBoundingClientRect();
    const aboutBottom = elementPositions.height + elementPositions.top - 200;
    

    if (document.documentElement.scrollTop > aboutBottom && document.documentElement.scrollTop < 1000) {
      document.getElementById("skillsContainer").className = "skillAnimation";
    } else {
      document.getElementById("skillsContainer").className = " ";
    }
  }
  increaseValue(value){
    this.number = this.number + value.number;
  }  
}

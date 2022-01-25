import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  @Input('number') number = Math.random();
  @Output('onclick') onclick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public numberClick() {
    this.onclick.emit({
      number: this.number,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'fon-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDateFromChange(date: MatDatepickerInputEvent<Date>) {
    console.log(date);
  }

  onDateToChange(date: MatDatepickerInputEvent<Date>) {
    console.log(date);
  }

}

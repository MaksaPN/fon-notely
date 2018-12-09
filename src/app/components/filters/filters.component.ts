import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { Filter } from '../../models/filter';

@Component({
  selector: 'fon-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() filtersChanged = new EventEmitter<Filter>();

  filters: Filter = {
    dateFrom: undefined,
    dateTo: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  onDateFromChange(event: MatDatepickerInputEvent<Date>) {
    this.filters.dateFrom = event.value;
    this.filtersChanged.emit(this.filters);
  }

  onDateToChange(event: MatDatepickerInputEvent<Date>) {
    this.filters.dateTo = event.value;
    this.filtersChanged.emit(this.filters);
  }

}

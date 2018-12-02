import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fon-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearchClick() {
    this.search.emit(this.searchTerm);
  }

}

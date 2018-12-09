import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'fon-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  debouncer = new Subject<string>();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.noteService.searchMade.next(value);
      });
  }

  onSearchClick() {
    this.noteService.searchMade.next(this.searchTerm);
  }

  onSearchInputUpdate(newValue: string) {
    this.debouncer.next(newValue);
  }

}

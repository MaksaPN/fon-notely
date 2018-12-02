import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Note } from '../../models/note';

@Component({
  selector: 'fon-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Output() editClicked = new EventEmitter<Note>();
  @Output() deleteClicked = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  openNoteDetails() {
    this.editClicked.emit(this.note);
  }

  deleteNote() {
    if (confirm('Are you sure you want to delete this note?')) {
      this.deleteClicked.emit(this.note);
    }
  }

}

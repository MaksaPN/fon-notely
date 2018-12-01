import { Component, OnInit } from '@angular/core';

import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'fon-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

}

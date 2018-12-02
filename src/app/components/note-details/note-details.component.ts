import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Note } from '../../models/note';
import { NoteListItem } from '../../models/note-list-item';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'fon-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  @Input() note: Note;
  newListItemContent: string;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.noteId) {
        this.noteService.getNote(+params.noteId).subscribe(note => {
          this.note = note;
        });
      }
    });
  }

  save() {

  }

  addListItem() {
    if (!this.newListItemContent) {
      alert('Cannot add empty list items');
      return;
    }
    const newListItem: NoteListItem = { completed: false, content: this.newListItemContent };
    this.note.listItems.push(newListItem);
    this.newListItemContent = '';
  }

  cancel() {
    this.router.navigate(['/notes']);
  }
}

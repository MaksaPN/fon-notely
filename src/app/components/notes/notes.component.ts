import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';
import { Subscription } from 'rxjs';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Component({
  selector: 'fon-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {

  notes: Note[] = [];
  showBackgroundOverlay = false;

  private noteCreatedSubscription: Subscription;
  private noteUpdatedSubscription: Subscription;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });

    this.noteCreatedSubscription = this.noteService.noteCreated.subscribe(newNote => {
      newNote.id = this.notes.length + 1;
      newNote.dateCreated = new Date().toISOString();
      this.notes.push(newNote);
    });

    this.noteUpdatedSubscription = this.noteService.noteUpdated.subscribe(updatedNote => {
      const noteToUpdate = this.notes.filter(n => n.id === updatedNote.id)[0];
      noteToUpdate.content = updatedNote.content;
      noteToUpdate.listItems = updatedNote.listItems;
      noteToUpdate.type = updatedNote.type;
      noteToUpdate.dateModified = new Date().toISOString();
    });
  }

  addNewNote() {
    this.router.navigate([{ outlets: { note: ['new'] } }], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy() {
    this.noteCreatedSubscription.unsubscribe();
    this.noteUpdatedSubscription.unsubscribe();
  }

  onEditClicked(note: Note) {
    this.router.navigate([{ outlets: { note: [note.id] } }], { relativeTo: this.activatedRoute });
  }

  onDeleteClicked(note: Note) {
    const noteToDelete = this.notes.filter(n => n.id === note.id)[0];
    this.notes.splice(this.notes.indexOf(noteToDelete), 1);
  }

  noteDetailsActivated(componentRef: NoteDetailsComponent) {
    document.body.style.overflowY = 'hidden';
    this.showBackgroundOverlay = true;
  }

  noteDetailsDeactivated() {
    document.body.style.overflowY = 'visible';
    this.showBackgroundOverlay = false;
  }
}

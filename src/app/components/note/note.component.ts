import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'fon-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }

}

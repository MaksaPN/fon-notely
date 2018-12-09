import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteCreated = new Subject<Note>();
  noteUpdated = new Subject<Note>();
  searchMade = new Subject<string>();

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('/assets/json/notes.json');
  }

  getNote(id: number): Observable<Note> {
    return this.http
      .get<Note[]>('/assets/json/notes.json')
      .pipe(map(notes => {
        const note = notes.filter(n => n.id === id)[0];
        return note;
      }));
  }
}

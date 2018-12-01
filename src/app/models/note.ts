import { NoteListItem } from './note-list-item';

export interface Note {
  id: number;
  content: string;
  listItems: NoteListItem[];
}

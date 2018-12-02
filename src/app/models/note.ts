import { NoteListItem } from './note-list-item';

export interface Note {
  id: number;
  content: string;
  type: 'simple' | 'list';
  listItems: NoteListItem[];
  dateCreated: string;
  dateModified: string;
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: 'notes', component: NotesComponent, children: [
      { path: ':noteId', component: NoteComponent, outlet: 'note' },
    ]
  },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

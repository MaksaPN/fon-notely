import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: 'notes', component: NotesComponent, children: [
      { path: ':noteId', component: NoteDetailsComponent, outlet: 'note' },
    ]
  },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    FiltersComponent,
    SearchComponent,
    HeaderComponent,
    AboutComponent,
    NoteDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

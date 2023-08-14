import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})

export class AddNoteComponent {

  noteForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router,) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      favorite: [false, Validators.required]
    });
  }

  addNote() {
    if (this.noteForm.invalid) {
      return;
    }
    const newNote = {
      title: this.noteForm.value.title,
      body: this.noteForm.value.body,
      favorite: this.noteForm.value.favorite,
      dateCreated: new Date().toLocaleDateString(),
      noteID: Math.floor(Math.random() * 1000)
    }
    this.dataService.addNote(newNote).subscribe(response => {
      console.log("Note Added", response);
      this.router.navigate(['/home']);
    })
  }
}

import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess-ui';

  moveForm = this.formBuilder.group({
    move: '',
  });

  newMove = '';

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // TODO: add validation
    console.log("submitted, no validation so it better be legal, lol");
    console.log("move: ", this.moveForm.value.move);
    this.newMove = this.moveForm.get('move')?.value || '';
  }
}

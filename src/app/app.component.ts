import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newest-angular';
  reactiveForm: FormGroup;
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('Cool'),
      lastName: new FormControl('Person'),
      email: new FormControl('YourEmail@email.com'),
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }
}


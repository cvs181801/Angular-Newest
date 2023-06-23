import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent //I generated the standalone component using the --standalone flag, a new feature with angular 14.  This created the component without modifying the app.module.ts file.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
////
//ng completion: you can run this in the shell (bash and zsh) to get CLI suggestions in your shell!


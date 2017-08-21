import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListService} from './service/list.service';
import {DropdownService} from './service/dropdown.service';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListService,DropdownService],
  bootstrap: [AppComponent,StudentComponent]
})
export class AppModule { 
 
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { StudentModule } from './student/student.module';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentTemplateFormComponent } from './student/student-template-form/student-template-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Home/Home.component';

import { ChangeDetectionComponent } from './ChangeDetection/ChangeDetection.component';
import { AppChanelComponent } from './appChanel/appChanel.component';
import { Observable } from 'rxjs';
import { ObservableComponent } from './RXJS/Observable/Observable.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    ChangeDetectionComponent,
    AppChanelComponent,
    ObservableComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StudentModule,
  ],
  providers: [
    StudentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

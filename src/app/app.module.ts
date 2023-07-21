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
import { ObservableComponent } from './RXJS/Observable/Observable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { LyfeCycleComponent } from './LyfeCycle/LyfeCycle.component';
import { OperatorComponent } from './RXJS/Operator/Operator.component';
import { SUBModule } from './sub/sub.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    ChangeDetectionComponent,
    AppChanelComponent,
    ObservableComponent,
    LyfeCycleComponent,
    OperatorComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StudentModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    SUBModule,

  ],
  providers: [
    StudentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

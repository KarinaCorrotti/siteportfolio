import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComputerComponent } from './components/computer/computer.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    ComputerComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],  
  providers: [],
  exports: [
      ComputerComponent,
      ProjectsComponent
  ]
  
})
export class SharedModule { }

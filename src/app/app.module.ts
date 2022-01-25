import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BallsSkillsComponent } from './pages/balls-skills/balls-skills.component';

const appRoutes: Routes = [
  {path: '', component: MainpageComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NumbersComponent,
    ContactComponent,
    BallsSkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,      
    ),
    SharedModule, 
    FormsModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

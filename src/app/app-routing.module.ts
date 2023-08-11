import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'add-note', component: AddNoteComponent},
  {path:'modify-note/:noteID', component: AddNoteComponent},
];

@NgModule({
  declarations: [  
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

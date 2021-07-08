import { LivreDetailsComponent } from './livre-details/livre-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivreListComponent } from './livre-list/livre-list.component';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';



const routes: Routes = [
  { path: '', redirectTo: 'livre', pathMatch: 'full' },
  { path: 'livres', component: LivreListComponent },
  { path: 'add', component: CreateLivreComponent },
  { path: 'update/:id', component: UpdateLivreComponent },
  { path: 'details/:id', component: LivreDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal/animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';

const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'animal/:id', component: AnimalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

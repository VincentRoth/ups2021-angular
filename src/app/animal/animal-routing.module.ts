import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';

const routes: Routes = [
  {
    path: 'animal',
    component: AnimalRootComponent,
    children: [
      { path: '', component: AnimalListComponent },
      { path: 'new', component: AnimalFormComponent },
      { path: 'edit/:id', component: AnimalFormComponent },
      { path: ':id', component: AnimalDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetFormComponent } from './vet-form/vet-form.component';
import { VetRootComponent } from './vet-root/vet-root.component';

const routes: Routes = [
  {
    path: '',
    component: VetRootComponent,
    children: [
      { path: 'new', component: VetFormComponent },
      { path: 'edit/:id', component: VetFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}

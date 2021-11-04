import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'animal', pathMatch: 'full' },
  {
    path: 'vet',
    loadChildren: () =>
      import('./vet/vet.module').then((tsModule) => tsModule.VetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

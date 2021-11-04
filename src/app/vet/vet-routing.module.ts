import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetRootComponent } from './vet-root/vet-root.component';

const routes: Routes = [{ path: '', component: VetRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}

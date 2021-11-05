import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetRootComponent } from './vet-root/vet-root.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';

@NgModule({
  declarations: [VetRootComponent, VetFormComponent, VetListComponent, VetDetailComponent],
  imports: [CommonModule, VetRoutingModule, ReactiveFormsModule],
})
export class VetModule {}

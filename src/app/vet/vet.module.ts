import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetRootComponent } from './vet-root/vet-root.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VetRootComponent, VetFormComponent],
  imports: [CommonModule, VetRoutingModule, ReactiveFormsModule],
})
export class VetModule {}

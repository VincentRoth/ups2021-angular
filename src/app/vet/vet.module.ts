import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetRootComponent } from './vet-root/vet-root.component';

@NgModule({
  declarations: [VetRootComponent],
  imports: [CommonModule, VetRoutingModule],
})
export class VetModule {}

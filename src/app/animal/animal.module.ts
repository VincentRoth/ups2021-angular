import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AnimalDetailComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalDetailComponent],
})
export class AnimalModule {}

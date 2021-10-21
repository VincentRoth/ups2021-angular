import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailtoDirective } from './mailto.directive';

@NgModule({
  declarations: [MailtoDirective],
  exports: [MailtoDirective],
  imports: [CommonModule],
})
export class SharedModule {}

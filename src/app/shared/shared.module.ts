import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailtoDirective } from './mailto.directive';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [MailtoDirective, PhonePipe],
  exports: [MailtoDirective, PhonePipe],
  imports: [CommonModule],
})
export class SharedModule {}

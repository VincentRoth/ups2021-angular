import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MailtoDirective } from './mailto.directive';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [MailtoDirective, PhonePipe],
  exports: [MailtoDirective, PhonePipe],
  imports: [CommonModule, HttpClientModule],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MailtoDirective } from './mailto.directive';
import { PhonePipe } from './phone.pipe';
import { TimeInterceptor } from './time.interceptor';

@NgModule({
  declarations: [MailtoDirective, PhonePipe],
  exports: [MailtoDirective, PhonePipe],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}

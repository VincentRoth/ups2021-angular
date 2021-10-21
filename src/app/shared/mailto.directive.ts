import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'a[appMailto]',
})
export class MailtoDirective implements AfterViewInit, OnChanges {
  @Input('appMailto') mail: string;

  constructor(private el: ElementRef<HTMLAnchorElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mail) {
      this.el.nativeElement.href = `mailto:${changes.mail}`;
    }
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.href = `mailto:${this.mail}`;
  }
}

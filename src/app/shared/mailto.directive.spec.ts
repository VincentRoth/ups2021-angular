import { ElementRef } from '@angular/core';
import { MailtoDirective } from './mailto.directive';

describe('MailtoDirective', () => {
  let directive: MailtoDirective;

  beforeEach(() => {
    directive = new MailtoDirective(
      new ElementRef(document.createElement('a'))
    );
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});

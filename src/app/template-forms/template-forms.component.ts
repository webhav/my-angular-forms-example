import { Component, OnInit, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';


function passwordMatcher(c: AbstractControl) {
  if (!c.get('password') || !c.get('confirm')) {
     return null;
  }
  return c.get('password').value === c.get('confirm').value
    ? null : {'nomatch': true};
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher}
  ]
})
export class PasswordMatcherDirective {

}

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  name = {first: 'Vaibhav', last: 'Gupta'};

  ngOnInit() {
  }

}

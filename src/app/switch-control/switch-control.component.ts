import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch-control',
  templateUrl: './switch-control.component.html',
  styleUrls: ['./switch-control.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SwitchControlComponent}
  ]
})
export class SwitchControlComponent implements ControlValueAccessor {

  isON: boolean;
  _onchange: (value: any) => void;

  toggle(isON: boolean) {
    this.isON = isON;
    this._onchange(isON);
  }

  constructor() { }

  writeValue(value: any) {
    this.isON = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._onchange = fn;
  }

  registerOnTouched() {}


}

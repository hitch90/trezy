import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Optional,
  Renderer2
} from '@angular/core';
import {
  COMPOSITION_BUFFER_MODE,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Directive({
  selector: '[appTrim]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: TrimDirective, multi: true }
  ]
})
export class TrimDirective implements ControlValueAccessor {
  @Input() trim: string;

  @Input()
  set type(value: string) {
    this._type = value || 'text';
  }
  private _type = 'text';

  private _value: string;

  private _sourceRenderer: Renderer2;
  private _sourceElementRef: ElementRef;

  @HostListener('blur', ['$event.type', '$event.target.value'])
  onBlur(event: string, value: string): void {
    this.updateValue(event, value.trim());
    this.onTouched();
  }

  @HostListener('input', ['$event.type', '$event.target.value'])
  onInput(event: string, value: string): void {
    this.updateValue(event, value);
  }

  onChange = (_: any) => {};

  onTouched = () => {};

  constructor(
    @Inject(Renderer2) renderer: Renderer2,
    @Inject(ElementRef) elementRef: ElementRef,
    @Optional() @Inject(COMPOSITION_BUFFER_MODE) compositionMode: boolean
  ) {
    this._sourceRenderer = renderer;
    this._sourceElementRef = elementRef;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public writeValue(value: any): void {
    this._value = value === '' ? '' : value || null;

    this._sourceRenderer.setProperty(
      this._sourceElementRef.nativeElement,
      'value',
      this._value
    );
    if (this._type !== 'text') {
      this._sourceRenderer.setAttribute(
        this._sourceElementRef.nativeElement,
        'value',
        this._value
      );
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this._sourceRenderer.setProperty(
      this._sourceElementRef.nativeElement,
      'disabled',
      isDisabled
    );
  }
  private updateValue(event: string, value: string): void {
    value = value.replace(/\s+/g, '');
    const previous = this._value;
    this.writeValue(value);
    if ((this._value || previous) && this._value !== previous) {
      this.onChange(this._value);
    }
  }
}

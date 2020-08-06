import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() val:string; 
  @Output() valChange = new EventEmitter<any>() 
  @Input() isReadyToReturn:boolean; 

  myForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this._createForm()
  }
  private _createForm() {
    this.myForm = this.fb.group({
      val: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\[({(,?\s?"[\wа-яА-ЯёЁ]+"\s?:\s?"[^".?]*")+},?\s?)+\]$/)
        ]
      ]
    })
  }
  btnText:string = 'продолжить' 
  onSubmit() {
    if (this.isReadyToReturn) {
      this.btnText = 'продолжить';
      this.valChange.emit();
      setTimeout(() => {
        this.myForm.patchValue({val: this.val}) 
      }, 0)
      this._val.enable(); 
    } else { 
      this.btnText = 'выгрузить' 
      this.valChange.emit(this._val.value); 
      this._val.disable();  
    }
  }
  get _val() {
    return this.myForm.get('val')
  }
}
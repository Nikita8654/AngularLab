import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(public fb: FormBuilder) {
  }

  online = ['yes', 'no'];

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name:  new FormControl('', [Validators.required]),
      cost:  new FormControl('', [Validators.required]),
      online:  new FormControl('yes', [Validators.required]),
      category:  new FormControl('', [Validators.required]),
      availableInStore: this.fb.group({
        DMart: new FormControl(false),
        Reliance: new FormControl(false)
      })
    });
  }
  onsubmit() {
    console.log(this.registrationForm.value);
  }

  /*get category() {
    return this.registrationForm.get('category');
  }

  selectProduct(product) {
    this.category.setValue(product.target.value, {onlySelf: true});
  }*/

 /* onCheckBoxChange(e) {
    const checkArray: FormArray = this.registrationForm.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }*/




}

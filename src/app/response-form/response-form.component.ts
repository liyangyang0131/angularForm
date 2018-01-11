import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit {
  private formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      date: new FormGroup({
        from: new FormControl(),
        to: new FormControl(),
      }),
      emailGroup: new FormArray([
        new FormControl(),
      ])
    });
  }
  /*constructor(private fb: FormBuilder) {
    this.formModel = this.fb.group({
      date: this.fb.group({
        from: [''],
        to: ['']
      }),
      emailGroup: this.fb.array([
        ['a@163.com'],
      ])
    });
  }*/

  ngOnInit() {
  }
  getEmailFormArray() {
    const obj = this.formModel.get('emailGroup');  // 拿到的是formArray的对象
    const array = obj as FormArray;     // 转换为formArray的数组
    return array;
  }

  addEmail() {
    this.getEmailFormArray().push(new FormControl());
  }

  delEmail(index) {
    this.getEmailFormArray().controls.splice(index, 1);
  }
  submit() {
    console.log(this.formModel.value);

  }
}

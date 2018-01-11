import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {phoneValidator, equalValidator, phoneAsyncValidator} from '../validators/validators';

@Component({
  selector: 'app-reactive-register-form',
  templateUrl: './reactive-register-form.component.html',
  styleUrls: ['./reactive-register-form.component.css']
})
export class ReactiveRegisterFormComponent implements OnInit {
  registerForm: FormGroup;



  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', phoneValidator, phoneAsyncValidator],
      email: [],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        pConfirm: []
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

  submit() {
    const isValid: Boolean = this.registerForm.get('username').valid;
    console.log('用户名的校验结果是:' + isValid);
    const error: any = this.registerForm.get('username').errors;
    console.log('用户名的错误信息是:' + error);
    console.log('是否聚焦过' + this.registerForm.get('username').untouched);

    if (this.registerForm.valid) {  // 只有所有信息通过，才能进行提交
      console.log(this.registerForm.value);
    }
  }
}

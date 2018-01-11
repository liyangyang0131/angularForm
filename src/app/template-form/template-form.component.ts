import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  validV: Boolean = true;
  untouchedV: Boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  /*submit(form: any, valid: Boolean) {   // 要通过传值
    console.log(valid);
    if (valid) { // 验证通过才打印表单值
      console.log(form.value);
    }
  }*/
  submit(form: NgForm) {   // 要通过传值
    if (form.form.valid) {
      console.log(form.form.value);
    }
  }

  usernameV(form: NgForm) {
    // 失去焦点不显示错误信息的原因为：绑定的是input事件
    if (form) {
      this.validV = form.form.get('username').valid;
      this.untouchedV = form.form.get('username').untouched;
    }
  }

}

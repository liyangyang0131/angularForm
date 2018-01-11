import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {phoneValidator} from '../validators/validators';

@Directive({  // 装饰器，可以看作为没有模板的组件
  selector: '[appPhoneValidator]',  // []表示指令作为html属性使用
  // provide为token，NG_VALIDATORS为 @angular/forms 的一个常量
  // useValue为校验器的名字
  // multi为同一个token下可挂多个值
  providers: [{provide: NG_VALIDATORS, useValue: phoneValidator, multi: true}]
})
export class PhoneValidatorDirective {

  constructor() { }

}

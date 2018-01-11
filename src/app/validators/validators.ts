import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/RX';
// 自定义校验器

// 单一的校验
export function phoneValidator(control: FormControl): any {
  const reg = /^1[3578]\d{9}$/;
  const valid = reg.test(control.value);
  console.log('手机号的校验结果是' + valid);
  return valid ? null : {'phone': true};  // 校验通过返回null,不通过返回一个对象{key:string}
}

export function phoneAsyncValidator(control: FormControl): any {
  const reg = /^1[3578]\d{9}$/;
  const valid = reg.test(control.value);
  console.log('手机号的校验结果是' + valid);
  return Observable.of(valid ? null : {'phone': true}).delay(5000);  // 返回的是一个流
}

// 多个校验
export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pConfirm: FormControl = group.get('pConfirm') as FormControl;
  let valid: Boolean = false;
  if (password && pConfirm) {
    valid = (password.value !== '' && password.value === pConfirm.value);
  }
  console.log('密码的校验结果是' + valid);
  // return valid ? null : {'equal': true};
  return valid ? null : {'equal': {'describe': '密码与确认密码不一致'}};
}

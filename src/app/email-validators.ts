import { FormControl } from '@angular/forms';

export class EmailValidators {
    static isValidEmail(control: FormControl) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValid = regEx.test(control.value);
        return isValid ? null : { isValidEmail: true };
    }
}
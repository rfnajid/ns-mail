import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: "[email]",
    providers: [{provide: NG_VALIDATORS, useExisting: IsEmailDirective, multi: true}]
})
export class IsEmailDirective implements Validator {

    constructor() {
        //
     }

    validate(control: AbstractControl): {[key: string]: any} {
        // tslint:disable-next-line:max-line-length
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        const valid = emailRegEx.test(control.value);

        return control.value < 1 || valid ? null : {email : true};
    }
}

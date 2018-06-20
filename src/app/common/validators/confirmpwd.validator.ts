import { AbstractControl } from "@angular/forms";

export class confirmPasswordValidator {
    static passwordmismatch(control: AbstractControl){
        let newpwd = control.get('newPassword');
        let confirmpwd = control.get('confirmPassword');

        if(newpwd.value !== confirmpwd.value)
            return {passwordmis:true};
        
        return null;
    }
}
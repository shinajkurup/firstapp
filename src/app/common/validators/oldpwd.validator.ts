import { AbstractControl } from "@angular/forms";

export class oldpwdvalidators {
    static shouldbeunique(control:AbstractControl){
        return new Promise((resolve, reject)=>{
            setTimeout( ()=>{
                if(control.value !== '1234')
                    resolve ({shouldbeunique: true})
                else
                    resolve (null);    
            }, 3000)    
        })
    }
}
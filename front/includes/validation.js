import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage} from 'vee-validate';
import {required, min, max, email } from '@vee-validate/rules'
export default {
    install(app) {
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('email', email);

    },
}
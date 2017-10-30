import Vue from 'vue'
import VeeValidate from 'vee-validate'

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'vee-fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  classes: true,
  classNames: {
    touched: 'focus',       // the control has been blurred
    untouched: 'blur',      // the control hasn't been blurred
    valid: 'valid',         // model is valid
    invalid: 'invalid',     // model is invalid
    pristine: 'pristine',   // control has not been interacted with
    dirty: 'dirty'          // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: true,
  aria: false
}

Vue.use(VeeValidate, config)

VeeValidate.Validator.extend('nickname', (value, [range]) => {
  const result = value.replace(/([\u4e00-\u9fa5])/g, 'aa').trim().length
  const length = range.split('-')
  return result >= length[0] && result <= length[1]
})

VeeValidate.Validator.extend('len', (value, len) => {
  const result = value.trim().length
  return result === parseInt(len[0], 10)
})

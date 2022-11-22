import Component from '@glimmer/component';
import { action } from '@ember/object';
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';
import { guidFor } from '@ember/object/internals';

export default class MaterialCheckboxComponent extends Component {
  checkbox;
  formfield;

  get guid() {
    return guidFor(this);
  }

  setValues(element, [value, disabled, indeterminate]) {
    this.checkbox.value = value;
    this.checkbox.disabled = disabled;
    this.checkbox.indeterminate = indeterminate;
  }

  @action
  didInsert(element) {
    this.checkbox = new MDCCheckbox(element.querySelector('.mdc-checkbox'));
    this.formField = new MDCFormField(element);
    this.formField.input = this.checkbox;

    this.checkbox.value = this.args.value;
    this.checkbox.disabled = this.args.disabled;
    this.checkbox.indeterminate = this.args.indeterminate;
  }
}

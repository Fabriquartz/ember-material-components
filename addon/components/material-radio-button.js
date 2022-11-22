import Component from '@glimmer/component';
import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class MaterialRadioButtonComponent extends Component {
  get guid() {
    return guidFor(this);
  }

  @action
  setValues(element, [value, disabled, checked]) {
    this.radio.value = value;
    this.radio.disabled = disabled;
    this.radio.checked = checked;
  }

  @action
  didInsert(element) {
    this.radio = new MDCRadio(element.querySelector('.mdc-radio'));
    this.formField = new MDCFormField(element);
    this.formField.input = this.radio;

    this.radio.value = this.args.value;
    this.radio.disabled = this.args.disabled;
    this.radio.checked = this.args.checked;
  }
}

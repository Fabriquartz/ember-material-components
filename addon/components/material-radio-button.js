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
  didInsert(element) {
    let radio = new MDCRadio(element.querySelector('.mdc-radio'));
    let formField = new MDCFormField(element);
    formField.input = radio;
  }
}

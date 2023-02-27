import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';

export default class MaterialCheckboxComponent extends Component {
  get guid() {
    return guidFor(this);
  }

  @action
  didInsert(element) {
    let checkbox = new MDCCheckbox(element.querySelector('.mdc-checkbox'));
    let formField = new MDCFormField(element);
    formField.input = checkbox;
  }
}

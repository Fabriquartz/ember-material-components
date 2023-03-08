import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCTextField } from '@material/textfield';

export default class MaterialTextFieldComponent extends Component {
  @tracked textField;

  get guid() {
    return guidFor(this);
  }

  @action
  didInsert(element) {
    this.textField = new MDCTextField(element);
  }
}

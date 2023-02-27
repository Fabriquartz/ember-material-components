import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { MDCTextField } from '@material/textfield';

export default class MaterialTextFieldComponent extends Component {
  get guid() {
    return guidFor(this);
  }

  @action
  didInsert(element) {
    new MDCTextField(element);
  }
}

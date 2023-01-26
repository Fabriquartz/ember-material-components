import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCTextField } from '@material/textfield';
import { tracked } from '@glimmer/tracking';

export default class MaterialTextFieldComponent extends Component {
  @tracked field;

  get guid() {
    return guidFor(this);
  }

  @action
  didInsert(element) {
    this.field = new MDCTextField(element);
  }
}

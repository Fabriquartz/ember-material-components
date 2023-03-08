import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class MaterialTextareaInputComponent extends Component {
  @action
  updateLayout() {
    if (document.activeElement !== this.args.textField.input) {
      this.args.textField.foundation.deactivateFocus();
    }
  }
}

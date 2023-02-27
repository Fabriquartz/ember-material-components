import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';

export default class HelperTextComponent extends Component {
  @action
  attachHelperText(element) {
    new MDCTextFieldHelperText(element);
  }
}

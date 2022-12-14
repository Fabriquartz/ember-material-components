import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DemoMaterialTextFieldComponent extends Component {
  textInputValue = '';

  @action
  onInput(event) {
    this.textInputValue = event.target.value;
  }
}

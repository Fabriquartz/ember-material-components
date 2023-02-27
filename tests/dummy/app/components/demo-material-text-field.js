import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoMaterialTextFieldComponent extends Component {
  @tracked textInputValue = 'Test text';

  @action
  onInput(event) {
    this.textInputValue = event.target.value;
  }
}

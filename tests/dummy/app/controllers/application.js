import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  textInputValue = '';
  switchValue = false;
  checkboxValue = false;

  @action
  onInput(event) {
    this.textInputValue = event.target.value;
  }
}

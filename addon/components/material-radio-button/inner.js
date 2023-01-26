import Component from '@glimmer/component';
import { MDCRadio } from '@material/radio';
import { action } from '@ember/object';

export default class MaterialRadioButtonComponent extends Component {
  @action
  didInsert(element) {
    new MDCRadio(element);
  }
}

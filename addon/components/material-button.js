import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';

export default class MaterialButtonComponent extends Component {
  @action
  didInsert(element) {
    new MDCRipple(element);
  }
}

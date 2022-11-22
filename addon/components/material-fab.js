import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';
import { action } from '@ember/object';

export default class MaterialFabComponent extends Component {
  @action
  didInsert(element) {
    new MDCRipple(element.querySelector('.mdc-fab'));
  }
}

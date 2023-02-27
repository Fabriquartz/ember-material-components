import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';

export default class MaterialChipsChipIconButtonComponent extends Component {
  @action
  attachRipple(element) {
    new MDCRipple(element);
  }
}

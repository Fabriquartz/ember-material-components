import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';

export default class MaterialDrawerNavigationItemComponent extends Component {
  @action
  applyRipple(element) {
    new MDCRipple(element);
  }
}

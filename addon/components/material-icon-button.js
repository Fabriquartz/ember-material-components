import Component from '@glimmer/component';
import { action } from '@ember/object';
import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';

export default class MaterialIconButtonComponent extends Component {
  @action
  didInsert(element) {
    let iconButtonRipple = new MDCRipple(element);
    iconButtonRipple.unbounded = true;

    if (this.args.isToggleable) {
      new MDCIconButtonToggle(element);
      element.addEventListener('MDCIconButtonToggle:change', this.onChange);
    }
  }

  @action
  onChange(event) {
    this.args.onChange && this.args.onChange(event.detail.isOn, ...arguments);
  }
}

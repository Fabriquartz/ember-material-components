import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCIconButtonToggle } from '@material/icon-button';
import { MDCRipple } from '@material/ripple';

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

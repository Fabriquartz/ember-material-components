import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';
import { MDCSwitch } from '@material/switch';

export default class MaterialSwitchComponent extends Component {
  switchControl;

  get guid() {
    return guidFor(this);
  }

  @action
  didInsert(element) {
    this.switchControl = new MDCSwitch(element);
    this.toggleChecked();
  }

  @action
  toggleChecked() {
    if (isPresent(this.args.checked)) {
      this.switchControl.selected = this.args.checked;
    }
  }

  @action
  onClick() {
    this.args.onChange && this.args.onChange(this.switchControl.selected);
  }
}

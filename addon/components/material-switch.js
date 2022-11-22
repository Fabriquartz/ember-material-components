import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
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
  }

  @action
  setValues(element, [value]) {
    this.switchControl.value = value;
  }

  @action
  onClick() {
    this.args.onChange(!this.args.value);
  }
}

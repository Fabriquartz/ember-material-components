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
    this.hasUpdated(element);
  }

  @action
  hasUpdated(element) {
    console.log('hasupdated');
    this.setValue(element, this.args.value);
  }

  @action
  setValue(element, value) {
    console.log('----', value);
    if (this.switchControl.selected !== value) {
      this.switchControl.selected = value;
    }
  }

  @action
  onClick() {
    console.log('aaaa', this.switchControl.selected);
    this.args.onChange(!this.switchControl.selected);
  }
}

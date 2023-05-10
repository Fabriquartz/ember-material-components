import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';
import { MDCSwitch } from '@material/switch';
/**
 * The Material Switch is a Button that artificially has two states: on and off.
 * Although it looks a bit like a checkbox, this component is not an input field
 * that can be treated as such.
 * 
  @class MaterialSwitchComponent
  @public
*/
export default class MaterialSwitchComponent extends Component {
  switchControl;
  /**
    Applies CSS classes to the button itself
    @argument {String} class
  */
  /**
    Determines whether the switch is on or off
    @argument {Boolean} checked
  */
  /**
    @argument {String} guid
  */
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

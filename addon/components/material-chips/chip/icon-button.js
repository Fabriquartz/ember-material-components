import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';

/**
  Works the same as the Material Icon button,but with additional CSS classes
  required for an icon button within a chip. Use the block form component
  and yield the name of a material icon.

  @class MaterialChipsChipIconButtonComponent
  @public
*/
export default class MaterialChipsChipIconButtonComponent extends Component {
  /**
    Applies CSS classes to the icon button's wrapper element instead of the
    icon button itself
    @argument {String} class
  */

  @action
  attachRipple(element) {
    new MDCRipple(element);
  }
}

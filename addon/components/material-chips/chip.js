import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

/**
  MaterialChips/Chip Component

  @class MaterialChipsChipComponent
  @yield {Component} material-chips/chip/button
  @yield {Component} material-chips/chip/icon-button

  @public
*/
export default class MaterialChipsChipComponent extends Component {
  /**
    Determines whether a chip is selectable or not. When a chip is selectable,
    the check mark appears as a leading icon in the chip after the chip is selected.
    @argument {Boolean} selectable
  */
  /**
    Mandatory when the button contains a graphic. When the chip has a graphic,
    space is kept free in the front of the chip. This can be used, for example,
    to show an avatar of the user.
    @argument {Boolean} hasGraphic
  */
  /**
    Mandatory when the button contains a leading icon
    @argument {Boolean} hasLeadingIcon
  */
  /**
    Mandatory when the chip has a trailing action, i.e.
    a material icon button for the secondary action.
    @argument {Boolean} hasTrailingAction
  */

  get guid() {
    return guidFor(this);
  }
}

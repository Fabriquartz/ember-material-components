import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';

/**
  A button that contains text and can contain an icon or avatar.

  @class MaterialChipsChipButtonComponent
  @yield {Component} material-chips/chip/button/text
    Use as a block to wrap the text to be displayed in the chip.
    The css classes passed with `@class` and the splattributes are appended to the root element.
  @yield {Component} material-chips/chip/button/icon
    Use as a block to wrap the icon name of the icon to be displayed in the chip.
    Use `@class` to append CSS classes to the root element. The Splattributes are appended to the `icon` itself.
  @yield {Component} material-chips/chip/button/avatar
    Use as a block to show something according to your own interpretation, for example an avatar.
    The css classes passed with `@class` and the splattributes are appended to the root element.
  @public
*/
export default class MaterialChipsChipButtonComponent extends Component {
  /**
    Determines whether a chip is selectable or not. When a chip is selectable,
    the 'role' of the 'button' is set to 'option'.
    @argument {Boolean} selectable
  */
  /**
    Applies CSS classes to the button's wrapper element instead of the button itself
    @argument {String} class
  */
  /**
    Applies the MDCRipple to the button
    @method attachRipple
    @param {Object} element that triggerd the did-insert event
    @private
  */
  @action
  attachRipple(element) {
    new MDCRipple(element);
  }
}

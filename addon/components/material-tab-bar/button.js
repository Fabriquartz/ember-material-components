/** @documenter yuidoc */
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';

/**
  A button that contains text and can contain two icons,
  one leading and one trailing. This component uses a native HTML button that
  can be treated as such using the splattributes.

  @class MaterialTabBarButtonComponent
  @yield {Component} material-icon
    The standard component for icons with additional CSS classes needed for icons in a button
  @yield {Component} material-button/text

  @public
*/
export default class MaterialButtonComponent extends Component {
  /**
    Applies CSS classes to the button's wrapper element instead of the button itself
    
    ```handlebars
    <MaterialButton @class="custom-class">Sample</MaterialButton>
    ```
    
    @argument {String} class
  */
  /**
    Changes the button to the stacked variant
    @argument {Boolean} stacked
  */
  /**
    Changes the button to the dense variant
    @argument {Boolean} dense
  */
  /**
    Changes the button to the unelevated variant
    @argument {Boolean} unelevated
  */
  /**
    Mandatory when the button contains a leading icon
    @argument {Boolean} hasLeadingIcon
  */
  /**
    Mandatory when the button contains a trailing icon
    @argument {Boolean} hasTrailingIcon
  */

  /**
    Applies the MDCRipple to the button
    @method didInsert
    @param {Object} element that triggerd the did-insert event
    @private
  */
  @action
  didInsert(element) {
    new MDCRipple(element);
  }
}

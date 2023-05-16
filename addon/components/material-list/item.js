import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCRipple } from '@material/ripple';

/**
  Wrapper to group several Material Lists as one big list, separated by dividers and headers.
  @class MaterialListItemComponent
  @yield {Component} item.material-list/item/affix
    A block element for rendering a div that can be used to create an avatar or to give some other custom interpretation to the pre- and/or suffix. The Splattributes and @class are appended to the element. @leading=true is needed when the element is placed in front of the text, the element is trailing by default.
  @yield {Component} item.material-list/item/checkbox
    A self-closing element for rendering a checkbox. The Splattributes and @class are appended to the element. @leading=true is needed when the element is placed in front of the text, the element is trailing by default.
  @yield {Component} item.material-list/item/icon
    A block element for rendering an icon and it yields the name of the icon. The Splattributes and @class are appended to the element. @leading=true is needed when the element is placed in front of the text, the element is trailing by default.
  @yield {Component} item.material-list/item/radio-button
    A self-closing element for rendering a radio button. The Splattributes and @class are appended to the element. @leading=true is needed when the element is placed in front of the text, the element is trailing by default.
  @yield {Component} item.material-list/item/switch
    A self-closing element that wraps a Material Switch in a div. The @class is attached to the wrapper, the Splattributes to the Material Switch.
  @yield {Component} item.material-list/item/text
    A block element that yields two texts: primary and secondary. To be used in combination with a two lined Material List. The Splattributes and @class are appended to the element.
  @public
*/
export default class MaterialListComponent extends Component {
  /**
    Applies CSS classes to the root element
    @argument {String} class
  */
  /**
    Changes the material list item to the activated variant
    @argument {Boolean} activated
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

import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCList } from '@material/list';

/**
  Wrapper for Material List
  @class MaterialListComponent
  @yield {Component} material-list/item
      Exactly the same as using <MaterialList> instead of the yielded version. See accompanying documentation.
  @yield {Component} material-list/divider
      The component can only be used as a self-closing element. Both Splattributes and @class are appended to the element.
  @public
*/
export default class MaterialListComponent extends Component {
  @tracked list;

  /**
    Applies CSS classes to the root element.
    @argument {String} class
  */
  /**
    Changes the list to the avatar variant, in which the list items have a wider prefix suitable for a (circular) avatar.
    @argument {Boolean} avatar
  */
  /**
    Changes the list to the two lined variant, in which the list items are higher than the default to make room for two lines of text.
    @argument {Boolean} twoLined
  */
  /**
    Applies the MDCList to the list
    @method didInsert
    @param {Object} element that triggerd the did-insert event
    @private
  */
  @action
  didInsert(element) {
    this.list = new MDCList(element);
  }
}

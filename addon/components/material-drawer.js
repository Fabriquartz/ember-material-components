import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCDrawer } from '@material/drawer';

/**
  Wrapper for Material Drawer
  @class MaterialDrawerComponent
  @yield {Component} material-drawer/header
    Named yield :drawerContent only. Can be used as a block element with a default yield for custom filling or with
    named yields (title and subtitle) to show either a title or a title and subtitle.
  @yield {Component} material-drawer/navigation
    Named yield :drawerContent only. Can be used to create a list of menu items in the navigation and is based on the
    Material List, with a stripped down version of the Material List Item. See accompanying documentation.
  @yield {method} toggleDrawer
    Opens a closed drawer and vice versa
  @public
*/
export default class MaterialDrawerComponent extends Component {
  @tracked drawer;
  /**
    Applies CSS classes to drawer   
    @argument {String} class
  */
  /**
    Changes the drawer to the dismissable variant
    @argument {Boolean} dismissable
  */
  /**
    Changes the drawer to the modal variant
    @argument {Boolean} modal
  */
  /**
    Applies the MDCDrawer to the drawer. Creates an eventHandler on MDCDrawer:closed (if modal- or dismissable variant),
    which will be triggered when the drawer closes, to set focus on a button or input. The parent of the drawer
    must always contain at least one button or input for it to work.
    @method didInsert
    @param {Object} element that triggerd the did-insert event
    @private
  */
  @action
  attachDrawer(element) {
    let parentElement = element.parentElement;

    if (this.args.modal || this.args.dismissable) {
      this.drawer = MDCDrawer.attachTo(element);

      document.body.addEventListener('MDCDrawer:closed', () => {
        parentElement.querySelector('input, button').focus();
      });
    }
  }

  /**
    Opens a closed drawer and vice versa
    @method toggleDrawer
    @public
  */
  @action
  toggleDrawer() {
    if (this.drawer) {
      this.drawer.open = !this.drawer.open;
    }
  }
}

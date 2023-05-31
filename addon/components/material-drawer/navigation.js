/** @documenter yuidoc */
import Component from '@glimmer/component';

/**
  Can be used to create a list of menu items in the navigation and is based on the Material List,
  with a stripped down version of the Material List Item.
  @class MaterialDrawerNavigationComponent
  @yield {Component} material-drawer/navigation/divider
    A self-closing element for rendering a divider. The Splattributes and @class are appended to the element.
  @yield {Component} material-drawer/navigation/item
    A block element that yields an iconName (as icon) and a text. The Splattributes and @class are appended to the element.
  @yield {Component} material-drawer/navigation/header
    A block element that yields a text. The Splattributes and @class are appended to the element.
  @public
*/
// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MaterialButtonComponent extends Component {}

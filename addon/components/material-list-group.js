import Component from '@glimmer/component';

/**
  Wrapper to group several Material Lists as one big list, separated by dividers and headers.
  @class MaterialListGroupComponent
  @yield {Component} material-list
    Exactly the same as using <MaterialList> instead of the yielded version. See accompanying documentation.
  @yield {Component} material-list-group/header
    The component consists of an element and can be used as a block. Both Splattributes and @class are appended to the element.
  @yield {Component} material-list-group/divider
    The component can only be used as a self-closing element. Both Splattributes and @class are appended to the element.
  @public
*/

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MaterialListGroupComponent extends Component {
  /**
    Applies CSS classes to the root element.
    
    @argument {String} class
  */
}

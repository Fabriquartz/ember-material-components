import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCChipSet } from '@material/chips';

/**
  Wrapper for Material Chip
  @class MaterialChipsComponent
  @yield {Component} material-chips/chip

  @public
*/
export default class MaterialChipsComponent extends Component {
  /**
    Applies CSS classes to the root element.
    
    @argument {String} class
  */
  /**
    Determines whether (if the chips are selectable) one or more chips can be selected.
    @argument {Boolean} multiselect
  */
  @action
  attachChips(element) {
    new MDCChipSet(element);
  }
}

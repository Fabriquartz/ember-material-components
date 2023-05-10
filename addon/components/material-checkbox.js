import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';

/**
  Material Checkbox wraps a `label` and a `MaterialCheckBox::Inner` into a form field.
  The `MaterialCheckBox::Inner` wraps an input[type=checkbox] in a div.

  @class MaterialButtonComponent
  @public
*/
export default class MaterialCheckboxComponent extends Component {
  /**
    Applies CSS classes to the form field wrapper instead of the MaterialCheckbox::Inner itself
    @argument {String} class
  */

  /**
    @argument {String} guid
  */
  get guid() {
    return guidFor(this);
  }

  /**
    Applies the `MDCCheckbox` to the wrapper element of the `input[type=checkbox]`
    and applies `MDCFormField` to the form field wrapper.
    @method didInsert
    @param {Object} element that triggerd the did-insert event
    @private
  */
  @action
  didInsert(element) {
    let checkbox = new MDCCheckbox(element.querySelector('.mdc-checkbox'));
    let formField = new MDCFormField(element);
    formField.input = checkbox;
  }
}

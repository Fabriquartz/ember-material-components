import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';

/**
  Material Radio Button wraps a `label` and a `MaterialRadioButton::Inner` into a form field.
  The `MaterialRadioButton:Inner` wraps an input[type=checkbox] in a div.

  @class MaterialRadioButtonComponent
  @public
*/
export default class MaterialRadioButtonComponent extends Component {
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
      Applies the `MDCRadioButton` to the wrapper element of the `input[type=radio]`
      and applies `MDCFormField` to the form field wrapper.
      @method didInsert
      @param {Object} element that triggerd the did-insert event
      @private
    */
  @action
  didInsert(element) {
    let radio = new MDCRadio(element.querySelector('.mdc-radio'));
    let formField = new MDCFormField(element);
    formField.input = radio;
  }
}

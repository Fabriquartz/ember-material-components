import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCTooltip } from '@material/tooltip';

/**
 * The tooltip is a short text that appears when the user hovers their cursor over 
 * the element to which the tooltip is attached.
 * 
  @class MaterialTooltipComponent
  @public
*/
export default class MaterialTooltipComponent extends Component {
  @tracked targetElement;

  /**
    @argument {String} guid
  */
  get guid() {
    return guidFor(this);
  }
  /**
   returns the element in which the tooltip will be rendered.
    @argument {Element} destinationElement
  */
  get destinationElement() {
    return document.querySelector('#ember-material-components-wormhole');
  }
  /**
    Links the tooltip to the anchor's parent element by giving it
    a 'data-tooltip-id', which is the guid.
    @method setAnchor
    @param {Object} element
    @private
  */
  @action
  setAnchor(element) {
    return element.parentElement.setAttribute('data-tooltip-id', this.guid);
  }
  /**
    Applies the `MDCTooltip` to the tooltip element.
    @method attachTooltip
    @param {Object} element that triggerd the did-insert event
    @private
  */
  @action
  attachTooltip(element) {
    new MDCTooltip(element);
    this.getTargetElement();
  }
  /**
    Finds the target element and removes the anchor.
    @method getTargetElement
    @private
  */
  @action
  getTargetElement() {
    let tetherElement = document.querySelector(`#tether-for-${this.guid}`);
    let targetElement = tetherElement && tetherElement.parentElement;

    if (targetElement) {
      tetherElement.remove();
      return targetElement;
    }
  }
}

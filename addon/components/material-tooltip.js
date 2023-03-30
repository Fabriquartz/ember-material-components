import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCTooltip } from '@material/tooltip';

export default class MaterialTooltipComponent extends Component {
  @tracked targetElement;

  get guid() {
    return guidFor(this);
  }

  get destinationElement() {
    return document.querySelector('#ember-material-components-wormhole');
  }

  @action
  setAnchor(element) {
    element.parentElement.setAttribute('data-tooltip-id', this.guid);
  }

  @action
  attachTooltip(element) {
    new MDCTooltip(element);
    this.getTargetElement();
  }

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

import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { MDCTooltip } from '@material/tooltip';

export default class MaterialTooltipComponent extends Component {
  get guid() {
    return guidFor(this);
  }

  @action
  didInsert(element) {
    element.parentElement.setAttribute('data-tooltip-id', this.guid);
    new MDCTooltip(element);
  }
}

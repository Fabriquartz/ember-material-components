import Component from '@glimmer/component';
import { MDCChipSet } from '@material/chips';
import { action } from '@ember/object';
export default class MaterialChipsComponent extends Component {
  @action
  attachChips(element) {
    new MDCChipSet(element);
  }
}

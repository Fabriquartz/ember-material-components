import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCChipSet } from '@material/chips';

export default class MaterialChipsComponent extends Component {
  @action
  attachChips(element) {
    new MDCChipSet(element);
  }
}

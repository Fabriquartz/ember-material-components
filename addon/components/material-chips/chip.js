import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class MaterialChipsChipComponent extends Component {
  get guid() {
    return guidFor(this);
  }
}

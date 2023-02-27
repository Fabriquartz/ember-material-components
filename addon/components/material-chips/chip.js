import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class MaterialChipsChipComponent extends Component {
  get guid() {
    return guidFor(this);
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DemoMaterialMenuComponent extends Component {
  @action
  update(path, value) {
    this[path] = value;
  }
}

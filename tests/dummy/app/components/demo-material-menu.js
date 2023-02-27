import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class DemoMaterialMenuComponent extends Component {
  @action
  update(path, value) {
    this[path] = value;
  }
}

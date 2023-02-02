import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class DemoMaterialSwitchComponent extends Component {
  @tracked switch1 = true;
  @tracked switch2 = true;
  @tracked switch3;

  @action
  update(path, value) {
    this[path] = value;
  }
}

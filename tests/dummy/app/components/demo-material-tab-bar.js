import { action } from '@ember/object';
import { next } from '@ember/runloop';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoMaterialTabBarComponent extends Component {
  @tracked _tabBar = true;
  @tracked icon = true;
  @tracked dense = false;
  @tracked stacked = false;
  @tracked scrollable = false;

  @action
  update(path, value) {
    this._tabBar = false;

    this[path] = value;

    next(() => {
      this._tabBar = true;
    });
  }
}

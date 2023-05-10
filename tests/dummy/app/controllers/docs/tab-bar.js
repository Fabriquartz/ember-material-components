// BEGIN-SNIPPET demo-material-tab-bar-0.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { next } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class DocsTabBarController extends Controller {
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
// END-SNIPPET

// BEGIN-SNIPPET demo-material-drawer-0.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { next } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DemoDrawerController extends Controller {
  @service router;

  @tracked currentDrawerView = 0;
  @tracked _drawer = true;

  get modal() {
    return this.currentDrawerView === 1;
  }

  get dismissable() {
    return this.currentDrawerView === 2;
  }

  @action
  toggleDrawerVersion(toggleDrawer, view) {
    toggleDrawer();
    this._drawer = false;

    this.currentDrawerView = view;

    next(() => {
      this._drawer = true;
    });
  }
}
// END-SNIPPET

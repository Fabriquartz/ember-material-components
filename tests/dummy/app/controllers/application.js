import Controller from '@ember/controller';
import { action } from '@ember/object';
import { next } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service router;

  @tracked currentDrawerView = 0;
  @tracked currentTopAppBarView = 0;
  @tracked _drawer = true;

  get pages() {
    let pages = [
      { name: 'Button', route: 'material-button' },
      { name: 'Card', route: 'material-card' },
      { name: 'Checkbox', route: 'material-checkbox' },
      { name: 'Chips', route: 'material-chips' },
      { name: 'Dialog', route: 'material-dialog' },
      { name: 'Drawer', route: 'material-drawer' },
      { name: 'Progress (circular)', route: 'material-circular-progress' },
      { name: 'Progress (linear)', route: 'material-linear-progress' },
      { name: 'List', route: 'material-list' },
      { name: 'Menu', route: 'material-menu' },
      { name: 'Radio button', route: 'material-radio-button' },
      { name: 'Switch', route: 'material-switch' },
      { name: 'Tab bar', route: 'material-tab-bar' },
      { name: 'Text Field', route: 'material-text-field' },
      { name: 'Tooltip', route: 'material-tooltip' },
      { name: 'Icon button', route: 'material-icon-button' },
    ];

    pages.forEach((page) => {
      if (this.router.currentRouteName.includes(page.route)) {
        page.isActive = true;
      }
    });

    return pages;
  }

  get modal() {
    return this.currentDrawerView === 1;
  }

  get dismissable() {
    return this.currentDrawerView === 2;
  }

  get fixed() {
    return this.currentTopAppBarView === 1;
  }

  get prominent() {
    return this.currentTopAppBarView === 2;
  }

  get dense() {
    return this.currentTopAppBarView === 3;
  }

  get shortCollapsed() {
    return this.currentTopAppBarView === 4;
  }

  @action
  toggleDrawerVersion(toggleDrawer) {
    toggleDrawer();
    this._drawer = false;

    this.currentDrawerView++;

    if (this.currentDrawerView > 2) {
      this.currentDrawerView = 0;
    }

    next(() => {
      this._drawer = true;
    });
  }

  @action
  togglecurrentTopAppBarView(toggleDrawer) {
    toggleDrawer();
    this._drawer = false;

    this.currentTopAppBarView++;

    if (this.currentTopAppBarView > 4) {
      this.currentTopAppBarView = 0;
    }

    next(() => {
      this._drawer = true;
    });
  }

  @action
  openRoute(route) {
    this.router.transitionTo(route);
  }
}

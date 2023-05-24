import Controller from '@ember/controller';
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
      { name: 'Button (icon)', route: 'material-icon-button' },
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

  get isDocsRoute() {
    return !this.router.currentRouteName.includes('demo');
  }
}

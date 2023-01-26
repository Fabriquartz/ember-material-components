import Component from '@glimmer/component';
import { MDCTopAppBar } from '@material/top-app-bar';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isPresent } from '@ember/utils';

export default class MaterialTopAppBarComponent extends Component {
  @tracked drawer;

  get headerClass() {
    return [
      'mdc-top-app-bar',
      this.args.short ? 'mdc-top-app-bar--short' : null,
      this.args.shortAlways
        ? 'mdc-top-app-bar--short mdc-top-app-bar--short-collapsed'
        : null,
      this.args.fixed ? 'mdc-top-app-bar--fixed' : null,
      this.args.prominent ? 'mdc-top-app-bar--prominent' : null,
      this.args.dense ? 'mdc-top-app-bar--dense' : null,
    ]
      .filter(isPresent)
      .join(' ');
  }

  get mainClasses() {
    return [
      'mdc-drawer-app-content',
      this.args.short ? 'mdc-top-app-bar--fixed-adjust' : null,
      this.args.shortAlways ? 'mdc-top-app-bar--fixed-adjust' : null,
      this.args.fixed ? 'mdc-top-app-bar--fixed-adjust' : null,
      this.args.prominent ? 'mdc-top-app-bar--prominent-fixed-adjust' : null,
      this.args.dense ? 'mdc-top-app-bar--dense-fixed-adjust' : null,
    ]
      .filter(isPresent)
      .join(' ');
  }

  @action
  didInsert(element) {
    new MDCTopAppBar(element);
  }

  @action
  setDrawer(drawer) {
    this.drawer = drawer;
  }

  @action
  toggleDrawer() {
    if (this.drawer) {
      this.drawer.open = !this.drawer.open;
    }
  }
}

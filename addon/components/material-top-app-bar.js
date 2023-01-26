import Component from '@glimmer/component';
import { MDCTopAppBar } from '@material/top-app-bar';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MaterialTopAppBarComponent extends Component {
  @tracked drawer;

  get mainClasses() {
    return this.args.short
      ? 'mdc-top-app-bar mdc-top-app-bar--short'
      : this.args.prominent
      ? 'mdc-top-app-bar mdc-top-app-bar--prominent'
      : this.args.dense
      ? 'mdc-top-app-bar mdc-top-app-bar--dense'
      : this.args.fixed
      ? 'mdc-top-app-bar mdc-top-app-bar--fixed'
      : 'mdc-top-app-bar';
  }

  get adjustCss() {
    return this.args.short
      ? 'mdc-top-app-bar--short-fixed-adjust'
      : this.args.prominent
      ? 'mdc-top-app-bar--prominent-fixed-adjust'
      : this.args.dense
      ? 'mdc-top-app-bar--dense-fixed-adjust'
      : 'mdc-top-app-bar--fixed-adjust';
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

import Component from '@glimmer/component';
import { MDCTopAppBar } from '@material/top-app-bar';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MaterialTopAppBarComponent extends Component {
  @tracked drawer;

  @action
  attachTopAppBar(element) {
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

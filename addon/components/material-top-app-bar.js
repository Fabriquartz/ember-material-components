import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCTopAppBar } from '@material/top-app-bar';

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

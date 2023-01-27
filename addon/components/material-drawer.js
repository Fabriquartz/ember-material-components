import Component from '@glimmer/component';
import { MDCDrawer } from '@material/drawer';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class MaterialDrawerComponent extends Component {
  @tracked drawer;

  @action
  attachDrawer(element) {
    let parentElement = element.parentElement;

    if (this.args.modal || this.args.dismissable) {
      this.drawer = MDCDrawer.attachTo(element);

      document.body.addEventListener('MDCDrawer:closed', () => {
        parentElement.querySelector('input, button').focus();
      });
    }
  }

  @action
  toggleDrawer() {
    if (this.drawer) {
      this.drawer.open = !this.drawer.open;
    }
  }
}

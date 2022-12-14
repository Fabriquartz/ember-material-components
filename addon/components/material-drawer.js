import Component from '@glimmer/component';
// import { MDCList } from '@material/list';
import { MDCDrawer } from '@material/drawer';
import { action } from '@ember/object';

export default class MaterialDrawerComponent extends Component {
  @action
  didInsert(element) {
    let mainContentEl = document.querySelector('.dummy-application');

    // let list = MDCList.attachTo(element);
    // list.wrapFocus = true;
    let drawer = MDCDrawer.attachTo(element);
    // drawer.open = true;

    document.body.addEventListener('MDCDrawer:closed', () => {
      mainContentEl.querySelector('input, button').focus();
    });

    if (this.args.setDrawer) {
      this.args.setDrawer(drawer);
    }
  }
}

import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCMenu } from '@material/menu';

export default class MaterialMenuComponent extends Component {
  @tracked menu;

  @action
  didInsert(element) {
    this.menu = new MDCMenu(element);
  }

  @action
  open() {
    this.menu.open = true;
  }
}

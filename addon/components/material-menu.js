import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCMenu } from '@material/menu';
import { tracked } from '@glimmer/tracking';

export default class MaterialMenuComponent extends Component {
  @tracked menu;

  @action
  didInsert() {
    this.menu = new MDCMenu(document.querySelector('.mdc-menu'));
  }

  @action
  open() {
    this.menu.open = true;
  }
}

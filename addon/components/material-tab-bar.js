import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCTabBar } from '@material/tab-bar';

export default class MaterialTabBarComponent extends Component {
  @action
  didInsert(element) {
    this.tabBar = new MDCTabBar(element);
  }
}

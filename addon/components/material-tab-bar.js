import Component from '@glimmer/component';
import { MDCTabBar } from '@material/tab-bar';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class MaterialTabBarComponent extends Component {
  @action
  didInsert(element) {
    this.tabBar = new MDCTabBar(element);
  }

  @action
  activateTab(tabindex) {
    if (this.tabBar) {
      this.tabBar.activateTab(tabindex);
    }
  }
}

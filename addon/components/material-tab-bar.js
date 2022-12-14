import Component from '@glimmer/component';
import { MDCTabBar } from '@material/tab-bar';
import { action } from '@ember/object';

export default class MaterialTabBarComponent extends Component {
  @action
  didInsert(element) {
    new MDCTabBar(element);
  }
}

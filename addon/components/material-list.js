import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCList } from '@material/list';

export default class MaterialListComponent extends Component {
  @tracked list;

  @action
  didInsert(element) {
    this.list = new MDCList(element);
  }
}

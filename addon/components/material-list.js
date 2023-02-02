import { action } from '@ember/object';
import Component from '@glimmer/component';
import { MDCList } from '@material/list';
import { tracked } from '@glimmer/tracking';

export default class MaterialListComponent extends Component {
  @tracked list;

  @action
  didInsert(element) {
    this.list = new MDCList(element);
  }
}

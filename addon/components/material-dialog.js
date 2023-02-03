import Component from '@glimmer/component';
import { MDCDialog } from '@material/dialog';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MaterialDialogComponent extends Component {
  @tracked dialog;

  @action
  didInsert(element) {
    this.dialog = new MDCDialog(element);
  }

  @action
  open() {
    this.dialog.open(...arguments);
  }

  @action
  close() {
    this.dialog.close(...arguments);
  }
}

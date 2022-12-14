import Component from '@glimmer/component';
import { MDCSnackbar } from '@material/snackbar';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MaterialSnackbarComponent extends Component {
  @tracked snackbar;

  @action
  didInsert(element) {
    this.snackbar = new MDCSnackbar(element);
    this.snackbar.open();
  }

  @action
  close() {
    this.snackbar.close();
  }
}

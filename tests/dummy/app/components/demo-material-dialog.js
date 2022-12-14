import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DemoMaterialDialogComponent extends Component {
  @tracked showSnackbar;
  @tracked snackbarText;

  @action
  confirm(close) {
    this.showSnackbar = true;
    this.snackbarText = 'Confirmed';
    close();
  }

  @action
  cancel(close) {
    this.showSnackbar = true;
    this.snackbarText = 'Canceled';
    close();
  }

  @action
  open(open) {
    this.showSnackbar = true;
    this.snackbarText = 'Opened';
    open();
  }
}

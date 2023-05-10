import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { MDCDialog } from '@material/dialog';

/**
  Wrapper for Material Chip
  @class MaterialChipsComponent
  @yield {Component} material-dialog/header
  @yield {Component} material-dialog/content
  @yield {Component} material-dialog/footer

  @public
*/
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

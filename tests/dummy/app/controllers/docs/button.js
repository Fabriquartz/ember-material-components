// BEGIN-SNIPPET demo-material-button-0.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DocsButtonController extends Controller {
  @tracked isLiked = false;

  @action
  toggleIsLiked() {
    this.isLiked = !this.isLiked;
  }
}
// END-SNIPPET

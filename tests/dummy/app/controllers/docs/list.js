// BEGIN-SNIPPET demo-material-list-0.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DocsListController extends Controller {
  @tracked value1 = false;
  @tracked value2 = false;
  @tracked value3 = true;

  get doneCount() {
    return `${[this.value1, this.value2].filter((value) => value).length}/2`;
  }

  @action
  update(path, e) {
    this[path] = e.target.checked;
  }

  @action
  onChange(path, value) {
    this[path] = value;
  }
}
// END-SNIPPET

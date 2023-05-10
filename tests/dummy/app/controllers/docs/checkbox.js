// BEGIN-SNIPPET demo-material-checkbox-0.js
import { A } from '@ember/array';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DocsCheckboxController extends Controller {
  @tracked value1 = true;
  @tracked value2 = false;
  @tracked value3 = false;

  get indeterminate() {
    let values = A([this.value1, this.value2, this.value3]);
    return !(
      values.every((value) => value === true) ||
      values.every((value) => value === false)
    );
  }
  set indeterminate(value) {
    this.value1 = value;
    this.value2 = value;
    this.value3 = value;
  }

  @action
  update(path, e) {
    this[path] = e.target.checked;
  }
}
// END-SNIPPET

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { action } from '@ember/object';

export default class DemoMaterialCheckboxComponent extends Component {
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

import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoMaterialRadioButtonComponent extends Component {
  @tracked color1 = '#fbc02d';
  @tracked color2 = null;

  get style() {
    return htmlSafe(`color:${this.color1}`);
  }

  @action
  update(path, value) {
    this[path] = value;
  }
}

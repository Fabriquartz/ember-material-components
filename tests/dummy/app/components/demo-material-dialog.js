import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoMaterialDialogComponent extends Component {
  @tracked fullscreen;

  @action
  update(path, value) {
    this[path] = value;
  }
}

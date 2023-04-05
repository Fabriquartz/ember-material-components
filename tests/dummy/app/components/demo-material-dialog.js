import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoMaterialDialogComponent extends Component {
  @tracked fullscreen;

  @service router;

  @action
  update(path, value) {
    this[path] = value;
  }

  @action
  transitionTo() {
    this.router.transitionTo('material-button');
  }
}

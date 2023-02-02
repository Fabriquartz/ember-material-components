import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DemoMaterialDrawerComponent extends Component {
  @service settings;

  @action
  onClick(value) {
    this.settings.materialDrawerModal = value;
  }
}

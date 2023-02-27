import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class DemoMaterialDrawerComponent extends Component {
  @service settings;

  @action
  onClick(value) {
    this.settings.materialDrawerModal = value;
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { MDCCircularProgress } from '@material/circular-progress';

export default class MaterialCircularProgressComponent extends Component {
  @action
  setValues(element, [indeterminate, progress]) {
    this.linearProgress.determinate = !indeterminate;
    this.linearProgress.progress = progress;
  }

  @action
  didInsert(element) {
    this.linearProgress = new MDCCircularProgress(element);

    this.setValues(element, [this.args.indeterminate, this.args.progress]);
  }
}

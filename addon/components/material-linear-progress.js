import Component from '@glimmer/component';
import { action } from '@ember/object';
import { MDCLinearProgress } from '@material/linear-progress';

export default class MaterialLinearProgressComponent extends Component {
  @action
  setValues(element, [indeterminate, progress, buffer]) {
    this.linearProgress.determinate = !indeterminate;
    this.linearProgress.progress = progress;
    this.linearProgress.buffer = buffer;
  }

  @action
  didInsert(element) {
    this.linearProgress = new MDCLinearProgress(element);

    this.setValues(element, [
      this.args.indeterminate,
      this.args.progress,
      this.args.buffer,
    ]);
  }
}

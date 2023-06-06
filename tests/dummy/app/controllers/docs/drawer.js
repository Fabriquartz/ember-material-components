import Controller from '@ember/controller';
import config from '../../config/environment';

export default class DocsButtonController extends Controller {
  get demoURL() {
    return `${config.rootURL}demo/drawer`;
  }
}

import config from 'dummy/config/environment';
import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  docsRoute(this, function () {
    this.route('get-started');
    this.route('button');
    this.route('checkbox');
    this.route('chips');
    this.route('icon-button');
    this.route('dialog');
    this.route('list');
    this.route('radio-button');
    this.route('switch');
    this.route('tab-bar');
    this.route('text-field');
    this.route('tooltip');
  });
});

export default Router;

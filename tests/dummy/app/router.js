import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('material-list');
  this.route('material-radio-button');
  this.route('material-button');
  this.route('material-card');
  this.route('material-checkbox');
  this.route('material-circular-progress');
  this.route('material-fab');
  this.route('material-linear-progress');
  this.route('material-menu');
  this.route('material-switch');
  this.route('material-text-field');
  this.route('material-tooltip');
  this.route('material-drawer');
  this.route('material-dialog');
  this.route('material-icon-button');
  this.route('material-chips');
  this.route('material-tab-bar');
});

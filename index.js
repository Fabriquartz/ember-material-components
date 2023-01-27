'use strict';

const path = require('path');
const resolve = require('resolve/sync');
const funnel = require('broccoli-funnel');
const { MergeTrees } = require('broccoli-merge-trees');

const materialPackages = [
  { name: 'animation', path: '@material/' },
  { name: 'base', path: '@material/' },
  { name: 'button', path: '@material/' },
  { name: 'card', path: '@material/' },
  { name: 'checkbox', path: '@material/' },
  { name: 'chips', path: '@material/' },
  { name: 'circular-progress', path: '@material/' },
  { name: 'density', path: '@material/' },
  { name: 'dialog', path: '@material/' },
  { name: 'dom', path: '@material/' },
  { name: 'drawer', path: '@material/' },
  { name: 'elevation', path: '@material/' },
  { name: 'fab', path: '@material/' },
  { name: 'feature-targeting', path: '@material/' },
  { name: 'floating-label', path: '@material/' },
  { name: 'form-field', path: '@material/' },
  { name: 'icon-button', path: '@material/' },
  { name: 'line-ripple', path: '@material/' },
  { name: 'linear-progress', path: '@material/' },
  { name: 'list', path: '@material/' },
  { name: 'menu-surface', path: '@material/' },
  { name: 'menu', path: '@material/' },
  { name: 'notched-outline', path: '@material/' },
  { name: 'progress-indicator', path: '@material/' },
  { name: 'radio', path: '@material/' },
  { name: 'ripple', path: '@material/' },
  { name: 'rtl', path: '@material/' },
  { name: 'shape', path: '@material/' },
  { name: 'snackbar', path: '@material/' },
  { name: 'switch', path: '@material/' },
  { name: 'tab-bar', path: '@material/' },
  { name: 'tab-indicator', path: '@material/' },
  { name: 'tab-scroller', path: '@material/' },
  { name: 'tab', path: '@material/' },
  { name: 'textfield', path: '@material/' },
  { name: 'theme', path: '@material/' },
  { name: 'tokens', path: '@material/' },
  { name: 'tooltip', path: '@material/' },
  { name: 'top-app-bar', path: '@material/' },
  { name: 'touch-target', path: '@material/' },
  { name: 'typography', path: '@material/' },
];

module.exports = {
  name: require('./package').name,

  included: function (app) {
    this._super.included.apply(this, arguments);
    app.import({
      development: 'node_modules/@material/textfield/dist/mdc.textfield.js',
      production: 'node_modules/@material/textfield/dist/mdc.textfield.min.js',
    });
    app.import({
      development: 'node_modules/@material/ripple/dist/mdc.ripple.js',
      production: 'node_modules/@material/ripple/dist/mdc.ripple.min.js',
    });
  },

  treeForStyles(tree) {
    let trees = [];

    let pathBase;
    materialPackages.forEach(function (pkg) {
      pathBase = path.dirname(
        resolve(`${pkg.path}/${pkg.name}/package.json`, {
          basedir: __dirname,
        })
      );

      trees.push(
        // Using broccoli to return a new tree with the
        // files that matches the include property rules.
        // import: ['**/*.{scss,sass}']
        funnel(pathBase, {
          destDir: `${pkg.path}/${pkg.name}`,
          include: ['**/*.{scss,sass}'],
        })
      );
    });

    // Push existing tree
    tree && trees.push(tree);

    // Returninng merged broccoli tress
    return new MergeTrees(trees, { overwrite: true });
  },
};

'use strict';

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

  optionsFor(type, options) {
    if (type === 'sass') {
      if (!options.includePaths.includes('node_modules'))
        options.includePaths.push('node_modules');
    }

    return options;
  },
};

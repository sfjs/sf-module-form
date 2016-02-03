"use strict";
import sf from 'sf';//resolved in webpack's "externals"
import Form from './Form';

sf.instancesController.registerInstanceType(Form,"js-sf-form");

module.exports = Form;   // ES6 default export will not expose us as global
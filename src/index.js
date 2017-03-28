"use strict";
import sf from 'sf-core';
import Form from './Form';

sf.registerInstanceType(Form, "js-sf-form");

module.exports = Form; // ES6 default export will not expose us as global

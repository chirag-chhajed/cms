'use strict';

/**
 * demo-cat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::demo-cat.demo-cat');

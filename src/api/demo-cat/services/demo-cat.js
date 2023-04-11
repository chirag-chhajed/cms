'use strict';

/**
 * demo-cat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-cat.demo-cat');

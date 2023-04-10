'use strict';

/**
 * demo-category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-category.demo-category');

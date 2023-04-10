'use strict';

/**
 * demo-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-tag.demo-tag');

'use strict';

/**
 * demo-author service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-author.demo-author');

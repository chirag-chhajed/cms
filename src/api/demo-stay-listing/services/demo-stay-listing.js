'use strict';

/**
 * demo-stay-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-stay-listing.demo-stay-listing');

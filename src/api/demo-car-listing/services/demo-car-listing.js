'use strict';

/**
 * demo-car-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-car-listing.demo-car-listing');

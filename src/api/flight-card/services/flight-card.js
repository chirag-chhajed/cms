'use strict';

/**
 * flight-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flight-card.flight-card');

'use strict';

/**
 * demo-cat router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::demo-cat.demo-cat');

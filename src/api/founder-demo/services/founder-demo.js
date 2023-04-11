'use strict';

/**
 * founder-demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::founder-demo.founder-demo');

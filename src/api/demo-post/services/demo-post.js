'use strict';

/**
 * demo-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-post.demo-post');

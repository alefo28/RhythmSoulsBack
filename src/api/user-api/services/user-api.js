'use strict';

/**
 * user-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-api.user-api');

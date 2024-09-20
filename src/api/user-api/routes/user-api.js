'use strict';

/**
 * user-api router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-api.user-api');

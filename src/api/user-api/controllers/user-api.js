'use strict';

/**
 * user-api controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-api.user-api');

'use strict';

/**
 * Species.js controller
 *
 * @description: A set of functions called "actions" for managing `Species`.
 */

module.exports = {

  /**
   * Retrieve species records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.species.search(ctx.query);
    } else {
      return strapi.services.species.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a species record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.species.fetch(ctx.params);
  },

  /**
   * Count species records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.species.count(ctx.query);
  },

  /**
   * Create a/an species record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.species.add(ctx.request.body);
  },

  /**
   * Update a/an species record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.species.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an species record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.species.remove(ctx.params);
  }
};

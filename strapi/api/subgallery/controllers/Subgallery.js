'use strict';

/**
 * Subgallery.js controller
 *
 * @description: A set of functions called "actions" for managing `Subgallery`.
 */

module.exports = {

  /**
   * Retrieve subgallery records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.subgallery.search(ctx.query);
    } else {
      return strapi.services.subgallery.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a subgallery record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.subgallery.fetch(ctx.params);
  },

  /**
   * Count subgallery records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.subgallery.count(ctx.query);
  },

  /**
   * Create a/an subgallery record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.subgallery.add(ctx.request.body);
  },

  /**
   * Update a/an subgallery record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.subgallery.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an subgallery record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.subgallery.remove(ctx.params);
  }
};

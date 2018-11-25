/**
 * Organization.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    email_domain: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    primary_user: {
      model: 'User',
      required: true
    },

  },

};


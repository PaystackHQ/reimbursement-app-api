/**
 * Comment.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    request_id: {
      model: 'Request',
      required: true
    },

    user_id: {
      model: 'User',
      required: true
    },

    body: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    attachment: {
      type: 'string',
      columnType: 'text',
      required: true
    },

  },

};


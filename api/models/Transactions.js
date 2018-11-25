/**
 * Transactions.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    amount: {
      type: 'number',
      columnType: 'float',
      required: true
    },

    transction_id: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    request_id: {
      model: 'Request',
      required: true
    }

  },

};


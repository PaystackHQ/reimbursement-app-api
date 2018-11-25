/**
 * Transfers.js
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

    transaction_id: {
      model: 'Transactions',
      required: true
    }

  },

};


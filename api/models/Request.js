/**
 * Request.js
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
    description: {
      type: 'string',
      columnType: 'text',
      required: true
    },
    status: {
      type: 'string', // status of request at any point in time
      isIn: ['pending', 'paid', 'approved', 'rejected'],
      required: true
    },

    comments: {
      collection: 'Comment',
      via: 'request_id'
    },

    reviewed_at: {
      type: 'string',
      columnType: 'date',
      required: false
    },
    paid_at: {
      type: 'string',
      columnType: 'date',
      required: false
    },

    user_id: {
      model: 'User',
      required: true
    },

    beneficiary: {
      model: 'Beneficiary',
      required: true
    },

    organization: {
      model: 'Organization',
      required: true
    },

  },


  //LifeCycle Callbacks

};

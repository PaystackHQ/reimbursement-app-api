/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    organization: {
      model: 'Organization',
      required: true
    },

    first_name: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    last_name: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    email: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    phone_number: {
      type: 'string',
      regex: /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?(\d{3,4})(-| )?\d{1,4}(-| )?\d{1,4}))$/,
      required: true
    },

    avatar: {
      type: 'string',
      columnType: 'text',
      required: false
    },

    paid_at: {
      type: 'date',
      required: false
    },

    requests: {
      collection: 'Request',
      via: 'user_id'
    },

    bank: {
      model: 'Bank',
      required: false
    },

    account_number: {
      type: 'number',
      required: false
    },

    role: {
      model: 'Role',
      required: false
    },

    beneficiary_id: {
      model: 'Beneficiary',
      required: false
    },

  },

};


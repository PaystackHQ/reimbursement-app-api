/**
 * Vendor.js
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

    name: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    account_number: {
      type: 'number',
      required: true
    },

    bank: {
      model: 'Bank',
      required: true
    },

    phone_number: {
      type: 'string',
      regex: /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?(\d{3,4})(-| )?\d{1,4}(-| )?\d{1,4}))$/,
      required: true
    },

    email: {
      type: 'string',
      columnType: 'text',
      required: true
    },

    beneficiary_id: {
      model: 'Beneficiary',
      required: true
    },

  },

};


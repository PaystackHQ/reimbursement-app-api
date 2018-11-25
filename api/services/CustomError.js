class CustomError extends Error {

  constructor(name, code, message, attrName) {
    super(message);
    this.code = code;
    this.type = name;
    this.description = message;
    this.fields = attrName;
  }

}


module.exports = {

  INVALID_CREDENTIALS: 'AUTHENTICATION_ERR',

  invalidCredentialsError: () => {
    const error = new CustomError(
      'AUTHENTICATION_ERR',
      400,
      'Invalid Email or Password'
    );
    return error;
  },

  VALIDATION_ERR: 'VALIDATION_ERR',

  validationError: (message) => {
    const error = new CustomError(
      'VALIDATION_ERR',
      400,
      message
    );
    return error;
  },

  INVALID_TOKEN: 'INVALID_TOKEN_ERR',

  invalidTokenError: () => {
    const error = new CustomError(
      'INVALID_TOKEN_ERR',
      400,
      'The supplied token is invalid|expired'
    );
    return error;
  },

  INVALID_PARAMETER: 'INVALID_PARAMETER_ERR',

  invalidParameterError: (field, param) => {
    const error = new CustomError(
      'INVALID_PARAMETER_ERR',
      400,
      `Invalid Field: No ${field} exists with the value of ${param}`
    );
    return error;
  },

  UNIQUE_CONSTRAINT: 'UNIQUE_CONSTRAINT_ERR',

  uniqueConstraintsError: (field1, field2) => {
    const error = new CustomError(
      'UNIQUE_CONSTRAINT_ERR',
      400,
      `${field1} with this ${field2} exists`
    );
    return error;
  },

  CREATE_ENTITY: 'FIELDS_VALIDATION_ERR',

  createEntityError: (message) => {
    const error = new CustomError(
      'FIELDS_VALIDATION_ERR',
      400,
      `One or more fields raised constraints error. ${message? message : ''}`
    );
    return error;
  },

  NO_RECORD_FOUND: 'NO_RECORD_FOUND',

  noRecordFoundError: (id, operation) => {
    const error = new CustomError(
      'NO_RECORD_FOUND_ERR',
      400,
      `You are trying to perform ${operation} operation on a record with id ${id} that does not exist`
    );
    return error;
  },


  FOREIGN_KEY_CONSTRAINT: 'FOREIGN_KEY_ERR',

  foreignKeyErr: (entity, set, id) => {
    const error = new CustomError(
      'FOREIGN_KEY_ERR',
      400,
      `The ${entity} ${id? 'with id of ' + id+ ' ': ''}does not exist ${set ? 'in '+ set : ''}`
    );
    return error;
  },

  NO_ENTITY: 'NON_EXISTENCE_ENTITY_ERR',

  noEntityErr: (entity, set, id) => {
    const error = new CustomError(
      'NON_EXISTENCE_ENTITY_ERR',
      400,
      `The ${entity} ${id? 'with id of ' + id+ ' ': ''}does not exist ${set ? 'in '+ set : ''}`
    );
    return error;
  },


  INVALID_EXTERNAL_ADDRESS: 'INVALID_ADDRESS_ERR',

  invalidAddressError: (message) => {
    const error = new CustomError(
      'INVALID_ADDRESS_ERR',
      400,
      `This check ${message} in the link and sure that it is correct`
    );
    return error;
  },

  MISSING_CARD: 'MISSING_CARD_ERR',

  missingCardError: () => {
    const error = new CustomError(
      'MISSING_CARD_ERR',
      400,
      `No Card is associated with this store`
    );
    return error;
  },

  INSUFFICIENT_SMS_UNIT: 'INSUFFICIENT_SMS_UNIT_ERR',

  insufficientSMSUnitError: () => {
    const error = new CustomError(
      'INSUFFICIENT_SMS_UNIT_ERR',
      400,
      `You do not have sufficient sms unit to send messages. Please top up to continue`
    );
    return error;
  },

  REQUEST_CONNECTION: 'REQUEST_CONNECTION_ERR',

  requestConnectionError: (name) => {
    const error = new CustomError(
      'REQUEST_CONNECTION_ERR',
      400,
      `Unable to establish connection to ${name} service`
    );
    return error;
  },

  INSUFFICIENT_QUANTITY: 'INSUFFICIENT_QUANTITY_ERR',

  insufficientQuantityError: (productName, productQuantity, requestedQuantity) => {
    const error = new CustomError(
      'INSUFFICIENT_QUANTITY_ERR',
      400,
      `The quantity (${productQuantity}) of ${productName} is not up to requested quanity ${requestedQuantity}`
    );
    return error;
  },


  AUTHORIZATION_HEADER: 'AUTHORIATION_HEADER_ERR',

  authorizationHeaderError: (message) => {
    const error = new CustomError(
      'AUTHORIATION_HEADER_ERR',
      401,
      `Authorization header is missing in this request ${message ? ':' + message: ''}`
    );
    return error;
  },

  LINK_ACCESS: 'LINK_AUTHENTICATION_ERR',

  linkAccessError: (link) => {
    const error = new CustomError(
      'LINK_AUTHENTICATION_ERR',
      403,
      `You don't sufficient priveledge to use this company ${link} link. Contact the admin`
    );
    return error;
  },


  MISSING_VALUE_ERROR: 'MISSING_VALUE_ERR',

  missingValueError: (message) => {
    const error = new CustomError(
      'MISSING_VALUE_ERR',
      403,
      `${message}`
    );
    return error;
  },

  AUTHORIZATION_MISSING: 'MISSING_AUTHORIZATION_ERR',

  authorizationError: (resource, action) => {
    const error = new CustomError(
      'MISSING_AUTHORIZATION_ERR',
      401,
      `You don't have the authorization ${resource ? 'to access this ' + resource: ''}${action ? 'to perform ' + action + 'action': ''}.`);
    return error;
  },

  internalError: (error, httpStatus) => {
    const customError = new CustomError(
      error.code, httpStatus, error.message, error.attrNames
    );
    return customError;
  }
};

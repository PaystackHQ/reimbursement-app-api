module.exports["swagger-generator"] = {
  disabled: false,
  swaggerJsonPath: "./swagger/swagger.json",
  parameters: { //we can add up custom parameters here
      PerPageQueryParam: {
          in: 'query',
          name: 'perPage',
          required: false,
          type: 'integer',
          description: 'This helps with pagination and when the limit is known for pagify'
      }
  },
  blueprint_parameters: {list: [{$ref: '#/parameters/PerPageQueryParam'}]},//we can add custom blueprint action to parameters binding here, any specified overrides default created
  swagger: {
      swagger: '2.0',
      info: {
          title: 'Reimbursement App API Documentation',
          description: 'This is a generated swagger json for your sails project',
          termsOfService: 'http://example.com/terms',
          contact: {name: 'Cerve', url: '', email: ''},
          version: '1.0.0'
      },
      host: '',
      basePath: '/',
      externalDocs: {url: ''}
  }
};

const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'https://petstore.swagger.io/v2/swagger.json',
  serversPath: './servers',
});

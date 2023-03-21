// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateService } = require('../dist/index');

generateService({
  schemaPath: 'http://121.43.101.170:30002/swagger/docs/v1/UFX.SCM.Cloud.DevelopeCenter',
  serversPath: './output/DevelopeCenter',
  generateApis: ['api/abp/api-definition', 'supplier/page-query-supplier'],
  // enumStyle: 'enum',
});

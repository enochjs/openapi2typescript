// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateService } = require('../dist/index');

generateService({
  requestLibPath: "import request from '@/services/request';",
  schemaPath:
    'http://dev-cloud-apigateway.codefr.com/clouddevelopecenter/swagger/v1/swagger.json?urls.primaryName=UFX.SCM.Cloud.PermissionCenter',
  serversPath: './src/services',
  projectName: 'DevelopeCenter',
  generateTraceId: true,
  namespace: 'DevelopeCenter',
  generateApis: ['/api/developecenter/research-archive/turn-to-big-goods'],
});

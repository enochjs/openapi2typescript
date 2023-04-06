// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateService } = require('../dist/index');

generateService({
  requestLibPath: "import request from '@/services/request';",
  schemaPath: 'http://121.43.101.170:30002/swagger/docs/v1/UFX.SCM.Cloud.DevelopeCenter',
  serversPath: './src/services',
  projectName: 'DevelopeCenter',
  namespace: 'DevelopeCenter',
  generateApis: ['/api/developecenter/research-archive/turn-to-big-goods'],
});

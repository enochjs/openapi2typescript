const assert = require('assert');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { match } = require('node-match-path');
const openAPI = require('../dist/index');

const gen = async () => {
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/test-allof-api.json`,
  //   serversPath: './servers-allof',
  // });

  await openAPI.generateService({
    namespace: 'Infrastructurecenter',
    schemaPath: `${__dirname}/example-files/linkmore.json`,
    serversPath: './servers',
    generateApis: ['/api/financecenter/payable/modify-manual-payable'],
    generateTraceId: true,
  });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/example-files/swagger-schema-contain-blank-symbol.json`,
  //   serversPath: './servers/blank-symbol-servers',
  // });

  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/example-files/swagger-file-convert.json`,
  //   serversPath: './file-servers',
  // });

  // await openAPI.generateService({
  //   requestLibPath: "import request  from '@/request';",
  //   schemaPath: `${__dirname}/example-files/swagger-custom-hook.json`,
  //   serversPath: './servers',
  //   hook: {
  //       // 自定义类名
  //       customClassName: (tagName) => {
  //           return /[A-Z].+/.exec(tagName);
  //       },
  //       // 自定义函数名
  //       customFunctionName: (data) => {
  //           let funName = data.operationId ? data.operationId : '';
  //           const suffix = 'Using';
  //           if (funName.indexOf(suffix) != -1) {
  //               funName = funName.substring(0, funName.lastIndexOf(suffix));
  //           }
  //           return funName;
  //       },
  //       // 自定义类型名
  //       customTypeName: (data) => {
  //         const { operationId } = data;
  //         const funName = operationId
  //           ? operationId[0].toUpperCase() + operationId.substring(1)
  //           : '';
  //         const tag = data?.tags?.[0];

  //         return `${tag ? tag : ''}${funName}`;
  //       }
  //   }
  // });

  // 支持null类型作为默认值
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/example-files/swagger-get-method-params-convert-obj.json`,
  //   serversPath: './servers/support-null',
  //   nullable:true
  // });

  // check 文件生成
  // const fileControllerStr = fs.readFileSync(path.join(__dirname, 'file-servers/api/fileController.ts'), 'utf8');
  // assert(fileControllerStr.indexOf('!(item instanceof File)') > 0);
  // assert(fileControllerStr.indexOf(`requestType: 'form',`) > 0);
  // assert(fileControllerStr.indexOf('Content-Type') < 0);
  // await openAPI.generateService({
  //   // requestLibPath: "import request  from '@/request';",
  //   schemaPath: `http://import { match } from 'node-match-path';
  // 82.157.33.9/swagger/swagger.json`,
  //   serversPath: './servers',
  // });
  // await openAPI.generateService({
  //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/LyDMjDyIhK/1611471979478-opa.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/Zd7dLTHUjE/ant-design-pro.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/morse-api.json`,
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/oc-swagger.json`,
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/java-api.json`,
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
};
gen();

// axios('http://121.43.101.170:30002/swagger/docs/v1/UFX.SCM.Cloud.DevelopeCenter').then((res) => {
//   // console.log(res.data);
//   fs.promises.writeFile('./linemore.json', JSON.stringify(res.data, null, 2));
// });
// const result = match(
//   '/api/developecenter/research-archive/${param0}/research-archive-detail',
//   '/api/developecenter/research-archive/{id}/research-archive-detail',
// );
// console.log('===result', result);
// // const s = `/api/developecenter/research-archive/${param0}/research-archive-detail`;
// // new RegExp();

// // ('/api/developecenter/research-archive/{id}/research-archive-detail');

// const r = /\$?{.*}/.test('/api/developecenter/research-archive/{id}/research-archive-detail');
// console.log(
//   '===re',
//   '/api/developecenter/research-archive/{id}/research-archive-detail'.replace(/\$?{.*}/g, '____'),
//   '/api/developecenter/research-archive/${param0}/research-archive-detail'.replace(
//     /\$?{.*}/g,
//     '____',
//   ),
// );

## 介绍
从umi-openapi 里克隆出来的  地址:https://www.npmjs.com/package/@umijs/openapi   
更改了template里的controller模板  让他支持vben格式
## 使用
```node
npm i --save-dev hlsa-swagger-to-interface
```
在项目根目录新建 ```openapi.config.ts```
```ts
const { generateService } = require('hlsa-swagger-to-interface')

generateService({
  schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  serversPath: './servers',
})

```
在 ```package.json``` 的 ```script``` 中添加 api: ```"openapi": "ts-node openapi.config.ts",```

生成api
```node
npm run openapi
```
## 参数
|  属性   | 必填  | 备注 | 类型 | 默认值 |
|  ----  | ----  |  ----  |  ----  | - |
| requestLibPath  | 否 | 自定义请求方法路径 | string | - |
| requestImportStatement  | 否 | 自定义请求方法表达式 | string | - |
| apiPrefix  | 否 | api 的前缀 | string | - |
| serversPath  | 否 | 生成的文件夹的路径 | string | - |
| schemaPath  | 否 | Swagger 2.0 或 OpenAPI 3.0 的地址 | string | - |
| projectName  | 否 | 项目名称 | string | - |
| namespace  | 否 | 命名空间名称 | string | API |
| mockFolder  | 否 | mock目录 | string | - |
| enumStyle  | 否 | 枚举样式 | string-literal \| enum | string-literal |
| nullable | 否 | 使用null代替可选 | boolean | false |
| dataFields | 否 | response中数据字段 | string[] | - |

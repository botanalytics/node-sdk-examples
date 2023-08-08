# Amazon Alexa

This section describes how to integrate a Botanalytics with Amazon Alexa `celebrity-older-or-younger` example.

## Installing SDK module

Within your project, run the following command depending on the package manager you use:

### Npm
```bash
npm install @botanalytics/core
```
### Yarn
```bash
yarn add @botanalytics/core
```

## Integration

Integrating Botanalytics into your Amazon Alexa voice assistant is quick and easy.

### Include Botanalytics

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/11fd40776cc7cde6502c70bd13545aab7160e780/amazon-alexa/celebrity-older-or-younger/index.js#L13)

```js
const { AmazonAlexaClient } = require('@botanalytics/core');
```

### Create the client

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/11fd40776cc7cde6502c70bd13545aab7160e780/amazon-alexa/celebrity-older-or-younger/index.js#L15)

```js
const botanalyticsClient = new AmazonAlexaClient();
```

### Configuration options

| Option        				| Required				| Default      	| Description | Environment Variable
| -------- 				| ------------ 			| ------- 				| ------	    | -----
| `apiKey`    | Yes						| `Has no default`          |  API key that is provided when a Universal channel is added to a project. | ```BA_API_KEY```
| `debug`    | No						| `false`           |  Enables logging. Set this to `true` to enable. | ```BA_DEBUG```
| `baseUrl`    | No						| `https://api.beta.botanalytics.co/v2`           | Base URL to be used for sending requests. Do not change this unless instructed by the Botanalytics team. | ```BA_BASE_URL```


### Additional environment variables/options
| Name        				| Required				| Default      	| Description | Environment Variable
| -------- 				| ------------ 			| ------- 				| ------	    | -----
| Could only be set via environment variable.    | No                       | `INFO`          |  Log level for the logger. Could be set one of following options `'fatal'`, `'error'`, `'warn'`, `'info`', `'debug'`, `'trace'` or `'silent'`.  | ```BA_LOG_LEVEL```
| `requestRetryLimit`    | No						| `10`           |  Request retry limit for the client | ```BA_REQUEST_RETRY_LIMIT```
| `requestTimeout`    | No						| `30000`           | Request timeout for the client  | ```BA_REQUEST_TIMEOUT```


### Log request messages with Botanalytics client

Add Botanalytics client's request interceptor by passing `botanalyticsClient.requestInterceptor()` to `addRequestInterceptors` method.

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/d94d17208c230189d1a1861864560da23e2c4592/amazon-alexa/celebrity-older-or-younger/index.js#L268C1-L270C6)

```js
let handler = Alexa.SkillBuilders.custom()
    ...
    .addRequestInterceptors(
      botanalyticsClient.requestInterceptor()
    )
    ...
    .create();
```

### Log response messages with Botanalytics client

Add Botanalytics client's response interceptor by passing `botanalyticsClient.responseInterceptor(false)` to `addResponseInterceptors` method.

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/d94d17208c230189d1a1861864560da23e2c4592/amazon-alexa/celebrity-older-or-younger/index.js#L271C1-L273C6)

```js
let handler = Alexa.SkillBuilders.custom()
    ...   
    .addResponseInterceptors(
      botanalyticsClient.responseInterceptor(false)
    )
    ...
    .create();
```

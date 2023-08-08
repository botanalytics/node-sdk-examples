# Amazon Alexa

This section describes how to integrate a Botanalytics with Amazon Alexa `celebrity-older-or-younger` example.

## Installing SDK module

Within your project, run the following command depending on the package manager you use:

<Tabs>
<TabItem value="npm" label="NPM">

```bash
npm install @botanalytics/core
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```bash
yarn add @botanalytics/core
```

</TabItem>
</Tabs>

## Integration

Integrating Botanalytics into your Amazon Alexa voice assistant is quick and easy.

### Include Botanalytics

```js
const { AmazonAlexaClient } = require('@botanalytics/core');
```

### Create the client

```js
const botanalyticsClient = new AmazonAlexaClient();
```

### Configuration options

| Option        				| Required				| Default      	| Description | Environment Variable
| -------- 				| ------------ 			| ------- 				| ------	    | -----
| `apiKey`    | Yes						| `Has no default`          |  API key that is provided when a Universal channel is added to a project. | ```BA_API_KEY```
| `debug`    | No						| `False`           |  Enables logging. Set this to `true` or `True` to enable. | ```BA_DEBUG```
| `baseUrl`    | No						| `https://api.beta.botanalytics.co/v2`           | Base URL to be used for sending requests. Do not change this unless instructed by the Botanalytics team. | ```BA_BASE_URL```


### Additional environment variables/options
| Name        				| Required				| Default      	| Description | Environment Variable
| -------- 				| ------------ 			| ------- 				| ------	    | -----
| Could only be set via environment variable.    | No                       | `INFO`          |  Log level for the logger. Could be set one of following options `'fatal'`, `'error'`, `'warn'`, `'info`', `'debug'`, `'trace'` or `'silent'`.  | ```BA_LOG_LEVEL```
| `requestRetryLimit`    | No						| `10`           |  Request retry limit for the client | ```BA_REQUEST_RETRY_LIMIT```
| `requestTimeout`    | No						| `30000`           | Request timeout for the client  | ```BA_REQUEST_TIMEOUT```


### Log request messages with Botanalytics client

Add Botanalytics client's request interceptor by passing `botanalyticsClient.requestInterceptor()` to `addRequestInterceptors` method.

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

```js
let handler = Alexa.SkillBuilders.custom()
    ...   
    .addResponseInterceptors(
      botanalyticsClient.responseInterceptor(false)
    )
    ...
    .create();
```

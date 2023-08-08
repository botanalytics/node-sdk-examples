# Microsoft Bot Framework

This section describes how to integrate Botanalytics with Microsoft Bot Framework `Complex Dialog Sample` example.

If you want to skip integration to see `Complex Dialog Sample` example's documentation you can click [here](https://github.com/botanalytics/node-sdk-examples/blob/master/microsoft-bot-framework/complex-dialog/README.md#complex-dialog-sample)

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

Integrating Botanalytics into your Microsoft Bot Framework is quick and easy.

### Include Botanalytics

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/26fa93f9f311aff5b815dd7b29e89b067ccd7825/microsoft-bot-framework/complex-dialog/index.js#L26)

```js
const { MicrosoftBotFrameworkClient } = require('@botanalytics/core');
```

### Create the client

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/26fa93f9f311aff5b815dd7b29e89b067ccd7825/microsoft-bot-framework/complex-dialog/index.js#L28)

```js
const botanalyticsClient = new MicrosoftBotFrameworkClient();
```

### Log messages with Botanalytics client

Add Botanalytics client's middleware by passing `botanalyticsClient.middleware()` to `adapter.use()` method.

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/26fa93f9f311aff5b815dd7b29e89b067ccd7825/microsoft-bot-framework/complex-dialog/index.js#L88)

```js
adapter.use(botanalyticsClient.middleware());
```

# Complex Dialog Sample

This sample creates a complex conversation with dialogs.

## Prerequisites

- [Node.js](https://nodejs.org) version 10.14 or higher

    ```bash
    # determine node version
    node --version
    ```

## To try this sample

- Clone the repository

    ```bash
    git clone https://github.com/microsoft/botbuilder-samples.git
    ```

- In a terminal, navigate to `samples/javascript_nodejs/43.complex-dialog`

    ```bash
    cd samples/javascript_nodejs43.complex-dialog
    ```

- Install modules

    ```bash
    npm install
    ```

- Start the bot

    ```bash
    npm start
    ```

## Testing the bot using Bot Framework Emulator

[Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the latest Bot Framework Emulator from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

### Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`

## Further reading

- [Azure Bot Service](https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0)
- [Bot Storage](https://docs.microsoft.com/azure/bot-service/dotnet/bot-builder-dotnet-state?view=azure-bot-service-3.0&viewFallbackFrom=azure-bot-service-4.0)

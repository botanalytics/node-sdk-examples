# Samsung Bixby

This section describes how to integrate Botanalytics with Samsung Bixby `States and Capitals Sample Capsule` example.

If you want to skip integration to see `States and Capitals Sample Capsule` example's documentation you can click [here](https://github.com/botanalytics/node-sdk-examples/tree/master/samsung-bixby/example.statesAndCapitals/README.md##overview)

## Prerequisites

A Samsung Bixby capsule that:
* Uses [JavaScript Runtime Version 2](https://bixbydevelopers.com/dev/docs/dev-guide/developers/actions.jsrs)
* Has [`bixby-user-id-access` permission](https://bixbydevelopers.com/dev/docs/reference/type/capsule.permissions.bixby-user-id-access)
* Is registered on the Samsung Bixby Developer Console (for setting configurations and secrets)

## Integration

### Copy Botanalytics library

Copy the [`botanalytics.js` file](https://github.com/botanalytics/node-sdk/blob/v3.x/samsung-bixby/lib/botanalytics.js) from our official GitHub repository to the `code/lib/` folder in your Samsung Bixby capsule.

### Add Configurations & Secrets

On Samsung Bixby Developer Console, open the Configuration & Secrets page under your capsule settings and set required values.

#### Secrets

| Name        				| Required		| Default      							| Description
| ----------- 				| ------------  |------------ 							| -----
| `botanalytics.apiKey`    | Yes				| Has no default          | API key that is provided when a Samsung Bixby channel is added to a project.

#### Configurations

| Name        				| Required				| Default      							| Description
| ----------- 				| ------------ 			| ------------ 							| -----
| `botanalytics.baseUrl`    | No						| `https://api.beta.botanalytics.co/v2`           | Base URL to be used for sending requests. Do not change this unless instructed by the Botanalytics team.
| `botanalytics.failFast`   | No						| `no`       							    | Whether to fail when an exception is encountered when sending data to Botanalytics. To enable this feature, set this to `true` or `yes`.

### Log interactions with your capsule

Import Botanalytics library:

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/4032cb9035a60196d8918d5bcd8b4e5bafda1be0/samsung-bixby/example.statesAndCapitals/code/FindCapital.js#L5)

```js
import { logInput, logOutput } from './lib/botanalytics.js';
```

Log input by passing action or intent name:

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/4032cb9035a60196d8918d5bcd8b4e5bafda1be0/samsung-bixby/example.statesAndCapitals/code/FindCapital.js#L9)

```js
logInput('findCapital', input);
```

:::info

In JavaScript Runtime Version 2, functions instead receive a single parameter, an object with key/value pairs whose keys correspond to the input keys in the action. `logOutput` method returns the provided output, so you can log and return the value in a single statement.

:::

Log output by passing action or intent name, input and output to be returned.

See code example [here](https://github.com/botanalytics/node-sdk-examples/blob/4032cb9035a60196d8918d5bcd8b4e5bafda1be0/samsung-bixby/example.statesAndCapitals/code/FindCapital.js#L24C1-L27C6)

```js
  return logOutput('findCapital', input, {
    capital: capital,
    stateGraphic: stateGraphic,
  });
```

<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby States and Capitals Sample Capsule</h1>
</p>

## Overview
This capsule is companion code to the Bixby 101 video tutorial (below)
. The capsule provides simple  States and Capitals questions and answers. The capsule highlights use the the basic building blocks of a Bixby capsule: Concepts, Actions, Endpoints, Dialog, Views and Training.

### Watch the Video
[![Watch the video](https://img.youtube.com/vi/iOVNtdibpJ4/maxresdefault.jpg)](https://youtu.be/iOVNtdibpJ4)


This capsule was developed as a companion to the video tutorial. If you are creating your own Q&A type capsule, we suggest you start with the very flexible [Facts Sample Capsule](https://github.com/bixbydevelopers/capsule-sample-fact)



## How to get started

* Download and install the Bixby Studio IDE from the [Bixby Developer Center](http://bixbydevelopers.com)
* Download this capsule (zip is the easiest way) from Github. Unzip in your directory of choice
* Open the Capsule in Bixby Studio
* Open the simulator and give it a try!

## Example phrases

```
What is the capital of California
What is the capital of Wyoming
What is the capital of Florida
What is the capital of [US State]
```

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!
* [Bixby News, Blogs and Tutorials](https://bixby.developer.samsung.com/) - Bixby News, Tutorials, Blogs and Events

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutorial videos, Presentations, Capsule Demos and more

### Bixby Podcast
* [Bixby Developers Chat](http://bixbydev.buzzsprout.com/) - Voice, Conversational AI and Bixby discussions 

### Bixby on Social Media
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)
* [Instagram](https://www.instagram.com/bixbydevelopers/)

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”


# testdeck-vuejs-seed

[![Build Status](https://travis-ci.org/testdeck/testdeck-vuejs-seed.svg?branch=master)](https://travis-ci.org/testdeck/testdeck-vuejs-seed)

A seed for you to get started with `@testdeck/jest` and Vue.js and Babel.

The project was bootstrapped with [@vue/cli](https://cli.vuejs.org/).

To run all tests

```
npm run test:unit
npm run test:e2e
```

## How to set this up yourself

To set this p, the following steps have been taken.

```
nvm install v8.15.1
npm install -g yarn
npm install -g @vue/cli

vue create my-app # manually select features -> select all but PWA, for unit testing select Jest
cd my-app
npm install @testdeck/jest
```

And that's it. The Vue.js babel preset already comes with decorators enabled, so all that is left
for us to do is to augment [tests/unit/example.spec.js](./tests/unit/example.spec.js) so that it
uses `@testdeck/jest`.


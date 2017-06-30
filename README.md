# Apptension Exercise React SSR 


## Installation

```bash
yarn
```

## Running Dev Server

```bash
yarn run start-dev 
```


## DISABLE / ENABLE Server-Side Rendering

1. Open ./bin/server.js
```

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = true;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

```


## ORIGINAL BOILERPLATE DOCUMENTATION

https://github.com/erikras/react-redux-universal-hot-example
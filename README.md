# @quantumdream/weclapp-api-client

This module exposes a Weclapp API Client

## Disclaimer

This is an unofficial library provided by an individual, the author is not affiliated with Weclapp

## Prerequisites

You need to provide an authentication token from a user with necessary access rights, details on how to set this up can be found in the official Weclapp documentation and is out of scope for this repository.

## Official API Documentation

[Weclapp API Documentation](https://www.weclapp.com/api/)

## Usage

```js
const client = new WeclappApiClient("<API_BASE_URL>", "<AUTHENTICATION_TOKEN>"); // Replace <> values with your Weclapp Api values

const { result } = await client.findUsers(); // Lists all users, explore types to find query params and more
```

## License

[License](./LICENSE)

# Introduction

This is a React Application to recreate a housing setup.

## How to start the test

Fork the repo and clone it, then:

```shell
  npm ci
  npm start
```

## API

The api is mocked client side and is described bellow

### Graphql API

[Graphql schema](./src/api/schema.graphql)

#### Project query
```graphql
  query {
    project {
      id
      name
      properties {
        priceRange
        surfaceRange
        exposures
        typologies
      }
    }
  }
```

#### Setup mutation
```graphql
  mutation($setup: SetupInput!) {
    upsertSetup(setup: $setup)
  }
```



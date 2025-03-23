/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDeck = /* GraphQL */ `query GetDeck($id: ID!) {
  getDeck(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDeckQueryVariables, APITypes.GetDeckQuery>;
export const listDecks = /* GraphQL */ `query ListDecks(
  $filter: ModelDeckFilterInput
  $limit: Int
  $nextToken: String
) {
  listDecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDecksQueryVariables, APITypes.ListDecksQuery>;
export const syncDecks = /* GraphQL */ `query SyncDecks(
  $filter: ModelDeckFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDecks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncDecksQueryVariables, APITypes.SyncDecksQuery>;

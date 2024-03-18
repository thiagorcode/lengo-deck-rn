/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDeck = /* GraphQL */ `subscription OnCreateDeck($filter: ModelSubscriptionDeckFilterInput) {
  onCreateDeck(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDeckSubscriptionVariables,
  APITypes.OnCreateDeckSubscription
>;
export const onUpdateDeck = /* GraphQL */ `subscription OnUpdateDeck($filter: ModelSubscriptionDeckFilterInput) {
  onUpdateDeck(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDeckSubscriptionVariables,
  APITypes.OnUpdateDeckSubscription
>;
export const onDeleteDeck = /* GraphQL */ `subscription OnDeleteDeck($filter: ModelSubscriptionDeckFilterInput) {
  onDeleteDeck(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDeckSubscriptionVariables,
  APITypes.OnDeleteDeckSubscription
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDeck = /* GraphQL */ `mutation CreateDeck(
  $input: CreateDeckInput!
  $condition: ModelDeckConditionInput
) {
  createDeck(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDeckMutationVariables,
  APITypes.CreateDeckMutation
>;
export const updateDeck = /* GraphQL */ `mutation UpdateDeck(
  $input: UpdateDeckInput!
  $condition: ModelDeckConditionInput
) {
  updateDeck(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDeckMutationVariables,
  APITypes.UpdateDeckMutation
>;
export const deleteDeck = /* GraphQL */ `mutation DeleteDeck(
  $input: DeleteDeckInput!
  $condition: ModelDeckConditionInput
) {
  deleteDeck(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDeckMutationVariables,
  APITypes.DeleteDeckMutation
>;

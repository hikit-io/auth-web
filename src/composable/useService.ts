import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;

export const LoginDocument = gql`
    mutation login($by: LoginParams!) {
  login(by: $by) {
    idToken
    accessToken
    expires
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     by: // value for 'by'
 *   },
 * });
 */
export function useLoginMutation(options: VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LoginMutation, LoginMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EmailLoginParams = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GithubLoginParams = {
  code: Scalars['String'];
};

export type LoginParams = {
  email?: InputMaybe<EmailLoginParams>;
  github?: InputMaybe<GithubLoginParams>;
};

export type LoginResp = {
  __typename?: 'LoginResp';
  accessToken: Scalars['String'];
  expires: Scalars['Int'];
  idToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  delete: Scalars['String'];
  login: LoginResp;
};


export type MutationLoginArgs = {
  by: LoginParams;
};

export type Query = {
  __typename?: 'Query';
  profile: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  by: LoginParams;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResp', idToken: string, accessToken: string, expires: number } };

import graphqlClient from '@/utils/graphql';

export const loginQuery = async () => {
  const {
    data: { gqlLogin },
  } = await graphqlClient.mutate({
    mutation: LOGIN_QUERY,
    variables: { email: 'testId', password: 'testPassword' },
  });

  console.log(gqlLogin.data);
};

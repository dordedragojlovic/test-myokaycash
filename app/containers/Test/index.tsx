import React, { useLayoutEffect, useState, useEffect }from 'react';

import { useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';

const userData = gql`
    mutation signUp ($input: UserLogin! ){
      signUp(input: $input){
        code
        qrCode
      }
    }
  `;

function TestView() {
  // const [data2, setData2] = useState();
  const [createuser, { data, loading, error }] = useMutation(userData);

  let dummyObj = {};

//    const res = createuser({variables:{input: { username: "asdasdsa44555", password: "342asdasd424" }}});
  // const [createuser, { data, loading, error }] = useMutation(
  //   userData,
  //   {
  //     update(cache, { data: { addTodo } }) {
  //       // const { todos } = cache.readQuery({ query: GET_TODOS });
  //       // cache.writeQuery({
  //       //   query: GET_TODOS,
  //       //   data: { todos: todos.concat([addTodo]) },
  //       // });

  //       // setData2(data);
  //     // console.log('********data2',data)
  //     }
  //   }
  // );

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  

  useEffect(( ) => {
        const res = createuser({variables:{input: { username: "test667s56sss343s7889", password: "342asdasd424" }}});

  },[dummyObj]);

  console.log('********data2',data)

  return (
      <h1>Ok</h1>
  );
}

export default TestView;

import { FormStateHandler } from './types';
import React, { useLayoutEffect, useState, useEffect }from 'react';
import { TextContainer, PageContainer, InputContainer, ButtonContainer, Section } from './styles';

import { ApolloProvider, useMutation } from '@apollo/react-hooks';
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

function HomePageView({ form }: { form: FormStateHandler }) {
  // const [data2, setData2] = useState();
  const [createuser, { data, loading, error }] = useMutation(userData);

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
  

  // useEffect(( ) => {
  //       // const res = createuser({variables:{input: { username: "test667s56sss343s7889", password: "342asdasd424" }}});

  // },[data]);

  console.log('********data2',data)

  return (
      <h1>Ok</h1>
    // <form onSubmit={form.handleSubmit}>
    //     <PageContainer>
    //         <Section>
    //             <TextContainer>
    //             <h1>Create your account on My<span>OKAY</span>Cash</h1>
    //             <h5>Enter you credentials to create your account</h5>
    //             </TextContainer>
    //             <InputContainer>
    //                 <div>
    //                     <h3>Name</h3>
    //                     <input
    //                         value={form.username}
    //                         onChange={form.onUsernameChange}
    //                     />
    //                 </div>
    //                 <div>
    //                     <h3>Password</h3>
    //                     <input
    //                         value={form.password}
    //                         onChange={form.onPasswordChange}
    //                     />
    //                 </div>
    //             </InputContainer>
    //         </Section>
    //         <ButtonContainer>
    //             <button type={'submit'}>ACTIVATE</button>
    //         </ButtonContainer>
    //     </PageContainer>
    // </form>
  );
}

export default HomePageView;
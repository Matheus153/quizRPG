/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import { openDB } from '../../src/lib/openDB'

export default function QuizDaGaleraPage({posts}) {
  return (
    <>
     {posts.map((post, index) => (
          <ThemeProvider key={index} theme={post.theme}></ThemeProvider>
      ))}
    
    {posts.map((post, index) => (
        <QuizScreen
        key={index}
        externalQuestions={post.questions}
        externalBg={post.bg1}
      />
      ))}
      
    </>
  );
}

export async function getServerSideProps(context) {
  /*
  * Implementar as buscas dos dados no MongoDB
  */
  const db = await openDB()
  const data = await db.collection('dados').find().toArray()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  }
}

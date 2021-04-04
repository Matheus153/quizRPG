import React from 'react'
import { openDB } from '../src/lib/openDB'
import Principal from '../src/components/Principal'
import QuizBackground from '../src/components/quizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'


export default function Home({ posts }) {
 
  return (
    <QuizBackground backgroundImage={'https://wallpaperaccess.com/full/2752949.jpg'}>
       <Head>
        <title>Você conhece o BTS?</title>
        <link rel="icon" href="https://img.icons8.com/nolan/2x/bts-logo.png" />
      </Head>
      {posts.map((post, index) => (
        <Principal key={index} post={post}></Principal>
      ))}
      <GitHubCorner projectUrl="https://github.com/Matheus153"/>
    </QuizBackground>    
  )  
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

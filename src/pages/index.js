import React from 'react'
import Principal from '../components/Principal'
import QuizBackground from '../components/quizBackground'
import GitHubCorner from '../components/GitHubCorner'
import Head from 'next/head'
import db from '../../db.json'


export default function Home() {
 
  return (
    <QuizBackground backgroundImage={db.bg}>
       <Head>
        <title>Você conhece o BTS?</title>
        <link rel="icon" href="https://img.icons8.com/nolan/2x/bts-logo.png" />
      </Head>
    
      <Principal></Principal>

      <GitHubCorner projectUrl="https://github.com/Matheus153"/>
    </QuizBackground>    
  )  
}
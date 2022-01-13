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
        <title>Quiz rpg</title>
      </Head>
    
      <Principal></Principal>

      <GitHubCorner projectUrl="https://github.com/Matheus153"/>
    </QuizBackground>    
  )  
}
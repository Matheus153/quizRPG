import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
/* import styles from '../styles/Mstyle.module.css' */

import db from '../db.json';
import Widget from '../src/components/Widget';
import Background from '../src/components/quizBackground'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

const StyledContainer = styled.div`
  width: 100%;
  
  // pressetes abaixo deixam o quiz no canto superior esquerdo
  /*max-width: 350px; 
  padding-top: 45px;
  margin: auto 10%; */
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    min-height: 92vh;
  }
`;

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <Background backgroundImage={db.bg1}>
      
        <Head>
          <title>Quiz BTS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <StyledContainer>
          <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit= {function(infosDoEvento) {
                infosDoEvento.preventDefault()
              
                router.push(`/quiz?name= ${name}`)
                console.log('Fazendo uma submissão pelo react')

                // router manda para a proxima página.
              }}>
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  placeholder="Diz aí seu nome"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar`} {/* {name } */}
                </Button>
              </form>
          </Widget.Content>
          </Widget>
        </StyledContainer>
        
          
            
    </Background>
    
  )

}

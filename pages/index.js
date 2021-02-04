import React from 'react'
import Head from 'next/head'
import styles from '../styles/Mstyle.module.css'
import { useRouter } from 'next/router'

import Background from '../src/components/quizBackground'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <Background>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1>Olá, jogador!</h1>

        <form onSubmit= {function(infosDoEvento) {
          infosDoEvento.preventDefault()
        
          router.push(`/quiz?name= ${name}`)
          console.log('Fazendo uma submissão pelo react')

          // router manda para a proxima página.
        }}>
          <Input
            name="nomeDoUsuario"
            onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
            placeholder="Diz ai seu nome"
            value={name}
          />
          <Button type="submit" disabled={name.length === 0}>
            {`Jogar`} {/* {name } */}
          </Button>
        </form>
        
      </div>      
    </Background>
    
  )

}

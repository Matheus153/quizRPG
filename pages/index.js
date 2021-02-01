import React from 'react'
import Head from 'next/head'
import styles from '../styles/Mstyle.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
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
        <input onChange= {function (infosDoEvento) {
          // console.log(infosDoEvento.target.value) 
          // Mostra o State, o estado do componente 
          /* name = infosDoEvento.target.value */
          setName(infosDoEvento.target.value)
          // target.value indica no alvo do valor de alguma coisa
          }
        } placeholder="Diz aí seu nome"/>
        <button type="submit" disabled={name.length === 0} 
        >jogador {name} 
        </button>
      </form>
      
    </div>      
  )

}

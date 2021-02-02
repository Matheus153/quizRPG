import Head from 'next/head'
import styles from '../styles/Mstyle.module.css'

export default function QuizPage() {
    return(
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Página do quiz</h1>

        </div>
    )
}
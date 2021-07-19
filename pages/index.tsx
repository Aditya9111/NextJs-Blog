import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeCompIndex from '../components/Home/UI';
import NavBar from '../components/NavBar/navBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aditya's Blog</title>
        <meta name="description" content="Blog by Aditya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
        <HomeCompIndex/>

        </main>
    </div>
  )
}

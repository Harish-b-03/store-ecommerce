import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../assets/styles/Home.module.css'
import Layout from '../containers/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Store. </title>
        <meta name="description" content="Store E-Commerce site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lekton&display=swap" rel="stylesheet"></link>
      </Head>
      Main
    </Layout>
  )
}

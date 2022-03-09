import { useState } from 'react'

import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import firebase from '../services/firebaseConnections'

import HeroIllustration from '../../public/images/hero-illustration.svg'

import * as S from '../styles/pages/HomeStyles'

type Donaters = {
  id: string
  donate: boolean
  lastDonate: Date
  image: string
}
interface HomeProps {
  data: string
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [donaters] = useState<Donaters[]>(JSON.parse(data))
  return (
    <>
      <Head>
        <title>Board | Organizando suas tarefas</title>
      </Head>
      <S.Wrapper role="main">
        <S.Ilustration>
          <Image
            src={HeroIllustration}
            alt="Ilustração contendo uma pessoa utilizando um notebook"
          />
        </S.Ilustration>
        <S.SectionHero>
          <S.Title role="heading">
            Uma ferramenta para seu dia a dia Escreva, planeje e organize-se...
          </S.Title>
          <S.Description role="heading">
            <span>100% Gratuita</span> e online
          </S.Description>
        </S.SectionHero>
        {donaters.length !== 0 && <h3>Apoiadores: </h3>}
        <S.ListOfSupporters>
          {donaters.map((item) => (
            <img key={item.image} src={item.image} alt="Foto do apoiador" />
          ))}
        </S.ListOfSupporters>
      </S.Wrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const donaters = await firebase.firestore().collection('users').get()
  const data = JSON.stringify(
    donaters.docs.map((item) => {
      return {
        ...item.data(),
        id: item.id
      }
    })
  )
  return {
    props: {
      data
    },
    revalidate: 60 * 60
  }
}

export default Home

import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import * as S from '../styles/pages/HomeStyles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Board | Organizando suas tarefas</title>
      </Head>
      <S.Wrapper role="main">
        <S.Ilustration
          role="img"
          src="/images/hero-illustration.svg"
          alt="Ilustração contendo uma pessoa utilizando um notebook"
        />
        <S.SectionHero>
          <S.Title role="heading">
            Uma ferramenta para seu dia a dia Escreva, planeje e organize-se...
          </S.Title>
          <S.Description role="heading">
            <span>100% Gratuita</span> e online
          </S.Description>
        </S.SectionHero>
        <S.ListOfSupporters>
          <img
            src="/images/person-exemple.png"
            alt="Foto de um homem ruivo com óculos"
          />
        </S.ListOfSupporters>
      </S.Wrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60
  }
}

export default Home

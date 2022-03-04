import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'

import * as S from '../../styles/pages/donateStyles'

interface DonateProps {
  user: {
    nome: string
    id: string
    image: string
  }
}

const Donate: NextPage<DonateProps> = ({ user }) => {
  console.log(user)
  return (
    <>
      <Head>
        <title>Ajude a plataforma Board ficar online</title>
      </Head>
      <S.Wrapper>
        <S.Illustration
          src="/images/illustration-donate-page.svg"
          alt="Seja um apoiador"
        />

        <S.VipMessage>
          <img src={user?.image} alt="Foto do novo apoiador!" />
          <span>Parabéns vcê é um novo apoiador!</span>
        </S.VipMessage>

        <S.Title>Seja um apoiador desse projeto 🏆</S.Title>
        <S.Subtitle>
          Contribua com apenas <span>1,00</span>
        </S.Subtitle>
        <S.HighlightedMessage>
          Apareça na nossa home, tenha funcionalidades exclusivas
        </S.HighlightedMessage>
      </S.Wrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session?.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = {
    nome: session?.user?.name,
    id: session?.id,
    image: session?.user?.image
  }

  return {
    props: {
      user
    }
  }
}

export default Donate

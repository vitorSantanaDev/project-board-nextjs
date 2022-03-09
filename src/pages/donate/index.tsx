import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps, NextPage } from 'next'

import { PayPalButtons } from '@paypal/react-paypal-js'
import { getSession } from 'next-auth/react'
import firebase from '../../services/firebaseConnections'

import DonatePageIllustration from '../../../public/images/illustration-donate-page.svg'

import * as S from '../../styles/pages/donateStyles'
interface DonateProps {
  user: {
    nome: string
    id: string
    image: string
  }
}

const Donate: NextPage<DonateProps> = ({ user }) => {
  const [vip, setVip] = useState(false)
  const handleSaveDonate = async () => {
    await firebase
      .firestore()
      .collection('users')
      .doc(user.id)
      .set({
        donate: true,
        lastDonate: new Date(),
        image: user.image
      })
      .then(() => setVip(true))
  }

  return (
    <>
      <Head>
        <title>Ajude a plataforma Board ficar online</title>
      </Head>
      <S.Wrapper>
        <S.Illustration>
          <Image
            src={DonatePageIllustration}
            alt="Imagem de um foguete prontoi pra decolar"
          />
        </S.Illustration>

        {vip && (
          <S.VipMessage>
            <img src={user?.image} alt="Foto do novo apoiador!" />
            <span>Parabéns vcê é um novo apoiador!</span>
          </S.VipMessage>
        )}

        <S.Title>Seja um apoiador desse projeto 🏆</S.Title>
        <S.Subtitle>
          Contribua com apenas <span>1,00</span>
        </S.Subtitle>
        <S.HighlightedMessage>
          Apareça na nossa home, tenha funcionalidades exclusivas
        </S.HighlightedMessage>

        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '1'
                  }
                }
              ]
            })
          }}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          onApprove={(data, actions) => {
            return actions.order?.capture().then(() => {
              handleSaveDonate()
            })
          }}
        />
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

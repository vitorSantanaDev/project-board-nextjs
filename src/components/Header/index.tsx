import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useMedia from '../../hooks/useMedia'

import SigInButton from '../SigInButton'
import LogoBoard from '../../../public/images/logo.svg'

import * as S from './styles'

const Header: React.FC = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const { pathname } = useRouter()
  const match = useMedia('(max-width: 768px)')

  useEffect(() => {
    setMenuMobile((state) => !state)
  }, [pathname])

  const handleShowMenuMobile = () => setMenuMobile((state) => !state)
  return (
    <S.Wrapper>
      <S.HeaderContent>
        <Link href="/">
          <S.Logo>
            <a href="/">
              <Image
                src={LogoBoard}
                alt="Logo meu Board, letra B com circulo amarelo ao lado"
              />
            </a>
          </S.Logo>
        </Link>
        {match && (
          <S.MenuHamburguer
            className={`${menuMobile ? 'active' : ''}`}
            onClick={handleShowMenuMobile}
          >
            <span className={`${menuMobile ? 'active' : ''}`}></span>
          </S.MenuHamburguer>
        )}
        <S.Navigation
          className={`${match ? 'mobileMenu' : ''} ${
            menuMobile ? 'active' : ''
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/board">Meu Board</Link>
          {match ? <SigInButton /> : null}
        </S.Navigation>
        {match ? null : <SigInButton />}
      </S.HeaderContent>
    </S.Wrapper>
  )
}

export default Header

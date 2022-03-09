import Link from 'next/link'
import Image from 'next/image'

import SigInButton from '../SigInButton'
import LogoBoard from '../../../public/images/logo.svg'

import * as S from './styles'

const Header: React.FC = () => {
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
        <S.Navigation>
          <Link href="/">Home</Link>
          <Link href="/board">Meu Board</Link>
        </S.Navigation>

        <SigInButton />
      </S.HeaderContent>
    </S.Wrapper>
  )
}

export default Header

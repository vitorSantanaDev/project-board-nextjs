import SigInButton from '../SigInButton'
import Link from 'next/link'
import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.HeaderContent>
        <Link href="/">
          <S.Logo
            src="/images/small-logo.svg"
            alt="Logo meu Board, letra B com circulo amarelo ao lado"
          />
        </Link>
        <S.Navigation>
          <Link href="/">Home</Link>
          <Link href="/board">Meu Board</Link>
        </S.Navigation>

        <SigInButton session={true} />
      </S.HeaderContent>
    </S.Wrapper>
  )
}

export default Header

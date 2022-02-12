import Link from 'next/link'
import * as S from './styles'

const SupportButton: React.FC = () => {
  return (
    <S.Wrapper>
      <Link href="/donate">
        <S.ButtonSupport>Apoiar</S.ButtonSupport>
      </Link>
    </S.Wrapper>
  )
}

export default SupportButton

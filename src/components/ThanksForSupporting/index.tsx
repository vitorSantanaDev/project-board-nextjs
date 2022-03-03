import { FiClock } from 'react-icons/fi'
import * as S from './styles'

const ThanksForSupporting: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Message>Obrigado por apoiar esse projeto.</S.Message>
      <S.TimeOfLastDonation>
        <FiClock size={28} color="#FFF" />
        <time>Última doação foi a 3 dias.</time>
      </S.TimeOfLastDonation>
    </S.Wrapper>
  )
}

export default ThanksForSupporting

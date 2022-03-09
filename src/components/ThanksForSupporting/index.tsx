import { FiClock } from 'react-icons/fi'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import * as S from './styles'

interface ThanksForSupportingProps {
  lastDonateUser: string | Date
}

const ThanksForSupporting: React.FC<ThanksForSupportingProps> = ({
  lastDonateUser
}) => {
  return (
    <S.Wrapper>
      <S.Message>Obrigado por apoiar esse projeto.</S.Message>
      <S.TimeOfLastDonation>
        <FiClock size={28} color="#FFF" />
        <time>
          Última doação foi a{' '}
          {formatDistance(new Date(lastDonateUser), new Date(), {
            locale: ptBR
          })}
        </time>
      </S.TimeOfLastDonation>
    </S.Wrapper>
  )
}

export default ThanksForSupporting

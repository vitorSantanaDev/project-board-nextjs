import * as S from './styles'
import { FaGithub } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

interface ButtonProps {
  session: boolean
  onClick?: () => void
}

const SigInButton: React.FC<ButtonProps> = ({ session, onClick }) => {
  return (
    <>
      {session ? (
        <S.ButtonWrapper type="button" onClick={onClick}>
          <img src="/images/person-exemple.png" alt="Photo do usário logado" />
          Olá Harry
          <FiLogOut color="#737380" className="logoutIcon" />
        </S.ButtonWrapper>
      ) : (
        <S.ButtonWrapper type="button" onClick={onClick}>
          <FaGithub color="#ffb800" />
          Entrar com Github
        </S.ButtonWrapper>
      )}
    </>
  )
}

export default SigInButton

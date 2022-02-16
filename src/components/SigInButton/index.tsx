import { signIn, signOut, useSession } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import * as S from './styles'

const SigInButton: React.FC = () => {
  const session = useSession()
  return (
    <>
      {session ? (
        <S.ButtonWrapper type="button" onClick={() => signOut()}>
          <img src="/images/person-exemple.png" alt="Photo do usário logado" />
          Olá Harry
          <FiLogOut color="#737380" className="logoutIcon" />
        </S.ButtonWrapper>
      ) : (
        <S.ButtonWrapper type="button" onClick={() => signIn('github')}>
          <FaGithub color="#ffb800" />
          Entrar com Github
        </S.ButtonWrapper>
      )}
    </>
  )
}

export default SigInButton

import * as S from './styles'

const PreLoading: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/logo.svg"
        alt="Uma logo com uma letra 'B' e um círculo amarelo ao lado"
      />
      <S.Title>A simple Project Board in NextJS</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS and Styled components
      </S.Description>
      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Um usuário de tecnologia, de frente pra um notebook."
      />
    </S.Wrapper>
  )
}

export default PreLoading

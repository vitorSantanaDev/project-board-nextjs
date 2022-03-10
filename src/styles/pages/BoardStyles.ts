import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 1120px;
  border-radius: 6px;

  padding: 2rem;
  margin: 4rem auto;

  background-color: #17181f;

  @media only screen and (max-width: 1024px) {
    margin: 4rem 2rem;
  }
`

export const Title = styled.h1`
  color: #fff;
  margin-top: 2.5rem;
`

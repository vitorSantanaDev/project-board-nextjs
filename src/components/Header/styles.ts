import styled from 'styled-components'

export const Wrapper = styled.header`
  height: 8rem;
  background-color: #141a29;
`

export const HeaderContent = styled.div`
  height: 8rem;
  max-width: 1120px;

  margin: 0 auto;

  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  cursor: pointer;
`

export const Navigation = styled.nav`
  height: 5rem;
  margin-left: 5rem;

  a {
    position: relative;
    display: inline-block;

    padding: 0 0.5rem;

    height: 5rem;
    line-height: 5rem;

    color: #fff;
    font-size: 1.8rem;

    & + a {
      margin-left: 2rem;
    }
  }
`

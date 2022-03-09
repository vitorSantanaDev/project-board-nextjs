import styled, { keyframes } from 'styled-components'

const animationEntry = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Wrapper = styled.main`
  max-width: 1120px;
  height: calc(100vh - 6rem);

  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const VipMessage = styled.div`
  padding: 1rem;
  margin-top: 1.8rem;

  border-radius: 6px;

  color: #fff;
  background-color: #019950;

  animation: ${animationEntry} forwards ease-in-out 0.5s;

  img {
    width: 35px;
    height: 35px;
    margin-right: 12px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #141a29;
  }

  span {
    font-size: 1.5rem;
  }
`

export const Illustration = styled.div``

export const Title = styled.h1`
  margin: 1rem 0;
  font-size: 4rem;
`

export const Subtitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;

  span {
    color: #019950;
    font-weight: bold;
  }
`

export const HighlightedMessage = styled.strong`
  padding: 1rem;
  margin-bottom: 1rem;

  font-size: 1.5rem;

  background-color: #eee;
`

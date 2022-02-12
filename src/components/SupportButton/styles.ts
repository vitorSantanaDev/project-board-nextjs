import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;

  right: 50px;
  bottom: 70px;
  z-index: 999;
`

export const ButtonSupport = styled.button`
  width: 100px;
  height: 100px;

  font-size: 1.6rem;

  border: 0;
  border-radius: 50%;

  background-color: #ffb800;
  filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.3));

  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  height: 2.5rem;
  border-radius: 3rem;
  cursor: pointer;

  padding: 0 1.5rem;
  margin-left: auto;

  color: #fff;
  background-color: transparent;

  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: ease-in-out 0.3s;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 1.2rem;
  }

  svg {
    width: 30px;
    height: 30px;

    &:first-child {
      margin-right: 1rem;
    }
  }

  svg.logoutIcon {
    margin-left: 1.2rem;
  }

  &:hover {
    opacity: 0.8;
  }
`

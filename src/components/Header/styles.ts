import styled from 'styled-components'

export const Wrapper = styled.header`
  padding: 1rem;
  background-color: #141a29;
  position: relative;
`

export const HeaderContent = styled.div`
  height: 8rem;
  max-width: 1120px;

  margin: 0 auto;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  cursor: pointer;

  img {
    min-width: 80%;
    max-width: 80%;
    min-height: 80%;
    max-height: 80%;
  }
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

  &.mobileMenu {
    width: 360px;
    height: 260px;

    padding: 1rem;
    margin: 0;

    right: 0;
    top: 100%;
    z-index: 1000;
    position: absolute;

    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    background-color: #141a29;
    transition: ease-in-out 0.3s;

    opacity: 0;
    pointer-events: none;

    display: flex;
    align-items: center;
    flex-direction: column;

    > button {
      margin-left: 0;
    }

    a {
      margin-left: 0;
      margin-bottom: 1.8rem;

      &::after {
        content: '';
        display: block;
        width: 0%;
        height: 1px;
        position: absolute;
        transition: ease-in-out 0.3s;
        background-color: currentColor;
      }

      &:hover::after {
        width: 100%;
      }
    }

    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
`

export const MenuHamburguer = styled.button`
  margin-bottom: 1rem;
  padding: 1.5rem 3rem;
  border: none;

  background: transparent;

  span {
    width: 40px;
    border-top: 2px solid #ffb800;
    display: inline-block;

    &::after,
    &::before {
      content: '';
      display: block;

      width: 40px;
      height: 2px;
      margin-top: 1rem;
      position: relative;
      transition: ease-in-out 0.3s;

      background-color: #ffb800;
    }

    &.active {
      border-top-color: transparent;

      &::before {
        transform: rotate(135deg);
      }
      &::after {
        transform: rotate(135deg);
      }
    }
  }
`

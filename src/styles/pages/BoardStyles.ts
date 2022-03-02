import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 1120px;
  border-radius: 6px;

  padding: 2rem;
  margin: 4rem auto;

  background-color: #17181f;

  .editTaskWarn {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2rem;
    transition: ease-in-out 0.3s;

    > span {
      color: #ffb800;
      font-size: 1.5rem;
    }

    > button {
      border: none;
      cursor: pointer;
      padding: 0.75rem;
      margin-left: 8px;
      margin-right: 12px;
      background-color: transparent;
    }
  }
`

export const Title = styled.h1`
  color: #fff;
  margin-top: 2.5rem;
`

export const ThanksForSupporting = styled.div`
  max-width: 1120px;
  border-radius: 6px;

  padding: 2rem;
  margin: 2rem auto;

  background-color: #20212c;

  > h3 {
    color: #ffb800;
    font-size: 2.8rem;
  }

  > div {
    margin-top: 3rem;

    display: flex;
    align-items: center;

    > time {
      color: #fff;
      font-size: 1.8rem;

      padding: 1rem;
    }
  }
`

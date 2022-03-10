import styled from 'styled-components'

export const Wrapper = styled.article`
  max-width: 1120px;

  padding: 2rem;
  margin: 2rem auto;

  border-radius: 6px;
  background-color: #17181f;

  @media only screen and (max-width: 1024px) {
    margin: 2rem 2rem;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .action {
    display: flex;
    align-items: center;

    > span {
      color: #fff;
      margin: 0 5px;
      font-size: 1.5rem;

      > time {
        color: #ffb800;
        margin-right: 1rem;
        font-size: 1.8rem;
      }
    }
  }
`

export const NameTask = styled.p`
  color: #fff;
  font-size: 1.8rem;
  line-height: 150%;
`

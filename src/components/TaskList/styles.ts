import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputElement = styled.input`
  width: 90%;
  height: 50px;

  padding: 8px 16px;

  border-radius: 6px;
  border: 1px solid #424242;

  color: #fff;
  background-color: #20212c;
`

export const ButtonSubmit = styled.button`
  width: 8%;
  height: 50px;
  cursor: pointer;
  border-radius: 6px;

  margin-left: 16px;

  background-color: #ffb800;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Title = styled.h1`
  color: #fff;
  margin-top: 2.5rem;
`

export const SectionWrapper = styled.section``

export const TasklList = styled.article`
  margin: 2rem 0;
  padding: 1.2rem;
  border-radius: 6px;

  background-color: #20212c;

  > h3 {
    color: #f2f6fc;
    font-size: 1.6rem;
    line-height: 150%;

    cursor: pointer;
  }
`

export const ActionsWrapper = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    time {
      color: #ffb800;

      margin-left: 0.5rem;
      margin-right: 1rem;
    }
  }
`

export const ButtonEdit = styled.button`
  border: none;
  background: transparent;

  cursor: pointer;
  margin-left: 1rem;
  transition: ease-in-out 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }

  > span {
    color: #fff;
    margin-left: 0.7rem;
  }
`

export const ButtonDelete = styled.button`
  border: none;
  background: transparent;

  cursor: pointer;
  margin-left: 1rem;
  transition: ease-in-out 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }

  > span {
    color: #fff;
    margin-left: 0.7rem;
  }
`

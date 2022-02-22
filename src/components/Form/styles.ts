import styled from 'styled-components'

export const Wrapper = styled.form`
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

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2rem;
  transition: ease-in-out 0.3s;
`

export const ButtonCloseWarn = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.75rem;
  margin-left: 8px;
  margin-right: 12px;
  background-color: transparent;
`

export const MessageWarn = styled.span`
  color: #ffb800;
  font-size: 1.5rem;
`

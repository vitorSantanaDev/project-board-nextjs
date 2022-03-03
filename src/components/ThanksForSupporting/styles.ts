import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1120px;
  border-radius: 6px;

  padding: 2rem;
  margin: 2rem auto;

  background-color: #20212c;
`

export const Message = styled.h3`
  color: #ffb800;
  font-size: 2.8rem;
`

export const TimeOfLastDonation = styled.div`
  margin-top: 3rem;

  display: flex;
  align-items: center;

  > time {
    color: #fff;
    font-size: 1.8rem;

    padding: 1rem;
  }
`

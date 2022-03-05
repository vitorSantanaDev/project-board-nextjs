import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 1120px;
  min-height: calc(100vh - 6rem);

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin: 1rem 0;
    font-size: 1.8rem;
  }
`

export const Ilustration = styled.img`
  margin-top: 4rem;
`

export const SectionHero = styled.section`
  max-width: 700px;
`

export const Title = styled.h1`
  color: #141a29;
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;

  margin-top: 2rem;
`

export const Description = styled.h3`
  margin-top: 2rem;

  color: #141a29;
  font-size: 2rem;
  text-align: center;

  span {
    color: #04dd75;
    font-weight: bold;
  }
`

export const ListOfSupporters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 65px;
    height: 65px;
    cursor: pointer;

    border-radius: 50%;
    border: 3px solid #141a29;

    transition: ease-in-out 0.3s;

    + img {
      margin-left: 1.5rem;
    }

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
`

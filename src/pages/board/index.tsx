import { NextPage } from 'next'
import Head from 'next/head'
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi'
import * as S from '../../styles/pages/BoardStyles'
import SupportButton from '../../components/SupportButton'

const Board: NextPage = () => {
  return (
    <>
      <Head>
        <title>Minhas tarefas - Board</title>
      </Head>
      <S.Wrapper>
        <S.Form>
          <S.InputElement type="text" placeholder="Digite sua tarefa" />
          <S.ButtonSubmit type="submit">
            <FiPlus size={25} color="#17181f" />
          </S.ButtonSubmit>
        </S.Form>
        <S.Title>Você tem 2 tarefas!</S.Title>
        <S.SectionWrapper>
          <S.TasklList role="article">
            <p>Aprender a criar projetos usando Next JS.</p>
            <S.ActionsWrapper>
              <div>
                <div>
                  <FiCalendar size={20} color="#FFB800" />
                  <time>17 julho 2021</time>
                </div>
                <S.ButtonEdit>
                  <FiEdit2 size={20} color="#FFF" />
                  <span>Editar</span>
                </S.ButtonEdit>
              </div>
              <S.ButtonDelete>
                <FiTrash size={20} color="#FF3636" />
                <span>Excluir</span>
              </S.ButtonDelete>
            </S.ActionsWrapper>
          </S.TasklList>
        </S.SectionWrapper>
      </S.Wrapper>

      <S.ThanksForSupporting>
        <h3>Obrigado por apoiar esse projeto.</h3>
        <div>
          <FiClock size={28} color="#FFF" />
          <time>Última doação foi a 3 dias.</time>
        </div>
      </S.ThanksForSupporting>
      <SupportButton />
    </>
  )
}

export default Board

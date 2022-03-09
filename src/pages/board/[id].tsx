import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'

import firebase from '../../services/firebaseConnections'
import { FiCalendar } from 'react-icons/fi'
import { format } from 'date-fns'

import * as S from '../../styles/pages/taskDetailsStyles'

type Task = {
  id: string
  created: string | Date
  createdFormated?: string
  tarefa: string
  userId: string
  nome: string
}

interface TaskListProps {
  data: string
}

const DetailsTask: NextPage<TaskListProps> = ({ data }) => {
  const task = JSON.parse(data) as Task
  return (
    <>
      <Head>
        <title>Detalhes da sua tarefa</title>
      </Head>
      <S.Wrapper>
        <S.ActionsContainer>
          <div className="action">
            <FiCalendar size={30} color="#fff" />
            <span>
              Tarefa criada <time>{task.createdFormated}</time>
            </span>
          </div>
        </S.ActionsContainer>
        <S.NameTask>{task.tarefa}</S.NameTask>
      </S.Wrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const id = params?.id
  const session = await getSession({ req })

  if (!session?.vip) {
    return {
      redirect: {
        destination: '/board',
        permanent: false
      }
    }
  }

  const data = await firebase
    .firestore()
    .collection('tarefas')
    .doc(String(id))
    .get()
    .then((snapshot) => {
      const newData = {
        id: snapshot.id,
        created: snapshot.data()?.created,
        createdFormated: format(
          snapshot.data()?.created.toDate(),
          'dd MMM yyyy'
        ),
        tarefa: snapshot.data()?.tarefa,
        userId: snapshot.data()?.userIdm,
        nome: snapshot.data()?.nome
      }
      return JSON.stringify(newData)
    })
    .catch(() => {
      return {}
    })

  if (Object.keys(data).length === 0) {
    return {
      redirect: {
        destination: '/board',
        permanent: false
      }
    }
  }

  return {
    props: {
      data
    }
  }
}

export default DetailsTask

import Head from 'next/head'
import { FormEvent, SetStateAction, useState } from 'react'
import firebase from '../../services/firebaseConnections'
import { format } from 'date-fns'
import { GetServerSideProps, NextPage } from 'next'
import { FiClock } from 'react-icons/fi'
import { getSession } from 'next-auth/react'
import SupportButton from '../../components/SupportButton'
import TaskList from '../../components/TaskList'
import Form from '../../components/Form'
import * as S from '../../styles/pages/BoardStyles'
interface DataBoardProps {
  dataUser: {
    id: string
    name: string
  }
  data: string
}

interface TaskListProps {
  id: string
  userId: string
  name: string
  tarefa: string
  created: Date
  createdFormated?: string
}

const Board: NextPage<DataBoardProps> = ({ dataUser, data }) => {
  const [input, setInput] = useState<string>('')
  const [taskList, setTaskList] = useState<TaskListProps[]>(JSON.parse(data))

  const handleChangeInput = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setInput(event.target.value)
  }

  const creatingTaskTheDataBase = async (): Promise<void> => {
    return firebase
      .firestore()
      .collection('tarefas')
      .add({
        created: new Date(),
        tarefa: input,
        userId: dataUser.id,
        nome: dataUser.name
      })
      .then((doc) => {
        const data = {
          id: doc.id,
          userId: dataUser.id,
          name: dataUser.name,
          tarefa: input,
          created: new Date(),
          createdFormated: format(new Date(), 'dd MMM yyyy')
        }
        setTaskList([...taskList, data])
      })
      .catch((error) => console.log(error, 'Error ao cadastrar'))
  }

  const handleAddTaskSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (input === '') {
      window.alert('É obrigatório digitar o nome da tarefa')
      return
    }
    await creatingTaskTheDataBase()
    setInput('')
  }

  const handleClickButtonDelete = async (taskId: string) => {
    await firebase
      .firestore()
      .collection('tarefas')
      .doc(taskId)
      .delete()
      .then(() => {
        const taskDeleted = taskList.filter((item) => item.id !== taskId)
        setTaskList(taskDeleted)
      })
      .catch((error) => console.warn(error))
  }

  return (
    <>
      <Head>
        <title>Minhas tarefas - Board</title>
      </Head>
      <S.Wrapper>
        <Form
          input={input}
          handleAddTaskSubmit={handleAddTaskSubmit}
          handleChangeInput={handleChangeInput}
        />
        <S.Title>
          Você tem {taskList.length}{' '}
          {taskList.length === 1 ? 'tarefa!' : 'tarefas!'}
        </S.Title>
        <TaskList
          handleClickButtonDelete={handleClickButtonDelete}
          tasks={taskList}
        />
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  if (!session?.user?.name) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const getTasks = async () => {
    return await firebase
      .firestore()
      .collection('tarefas')
      .where('userId', '==', session?.id)
      .orderBy('created', 'asc')
      .get()
  }
  const tasks = await getTasks()

  const data = tasks.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      createdFormated: format(doc.data().created.toDate(), 'dd MMM yyyy')
    }
  })

  const dataUser = {
    id: session?.id,
    name: session.user.name
  }

  return {
    props: {
      dataUser,
      data: JSON.stringify(data)
    }
  }
}

export default Board

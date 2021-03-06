import Link from 'next/link'

import { FiCalendar, FiEdit2, FiTrash } from 'react-icons/fi'

import * as S from './styles'

interface Task {
  id: string
  userId: string
  name: string
  tarefa: string
  created: Date
  createdFormated?: string
}

interface TaskListProps {
  tasks: {
    id: string
    userId: string
    name: string
    tarefa: string
    created: Date
    createdFormated?: string
  }[]
  handleClickButtonDeleteTask: (taskId: string) => void
  handleClickButtonEditTask: (taskId: Task) => void
  userIsVip: boolean
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleClickButtonDeleteTask,
  handleClickButtonEditTask,
  userIsVip
}) => {
  return (
    <>
      {tasks.map((task) => (
        <S.SectionWrapper id="article" key={task.id}>
          <S.TasklList>
            <Link href={`/board/${task.id}`}>
              <h3>{task.tarefa}</h3>
            </Link>
            <S.ActionsWrapper>
              <div>
                <div>
                  <FiCalendar size={20} color="#FFB800" />
                  <time>{task.createdFormated}</time>
                </div>
                {userIsVip && (
                  <S.ButtonEdit onClick={() => handleClickButtonEditTask(task)}>
                    <FiEdit2 size={20} color="#FFF" />
                    <span>Editar</span>
                  </S.ButtonEdit>
                )}
              </div>
              <S.ButtonDelete
                onClick={() => handleClickButtonDeleteTask(task.id)}
              >
                <FiTrash size={20} color="#FF3636" />
                <span>Excluir</span>
              </S.ButtonDelete>
            </S.ActionsWrapper>
          </S.TasklList>
        </S.SectionWrapper>
      ))}
    </>
  )
}

export default TaskList

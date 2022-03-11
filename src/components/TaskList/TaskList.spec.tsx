import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskList from '.'
import { listTasks, taskListProps } from './mockProps'

describe('<TaskList />', () => {
  it('should render tasks', () => {
    render(<TaskList tasks={listTasks} userIsVip={true} {...taskListProps} />)
    const articles = screen.getAllByRole('article')
    const headingOfTasks = screen.getAllByRole('heading', {
      name: /name task/i
    })
    const textsDateOfCreatedTask = screen.getAllByText(/date of created/i)
    const buttonsDeleteTasks = screen.getAllByRole('button', {
      name: /excluir/i
    })
    const buttonsEditTasks = screen.getAllByRole('button', {
      name: /editar/i
    })

    expect(articles).toHaveLength(5)
    expect(headingOfTasks).toHaveLength(5)
    expect(textsDateOfCreatedTask).toHaveLength(5)
    expect(buttonsDeleteTasks).toHaveLength(5)
    expect(buttonsEditTasks).toHaveLength(5)
  })

  it('should not render "Editar" button when userIsVip is false', () => {
    render(<TaskList tasks={listTasks} userIsVip={false} {...taskListProps} />)
    const articles = screen.getAllByRole('article')
    const headingOfTasks = screen.getAllByRole('heading', {
      name: /name task/i
    })
    const textsDateOfCreatedTask = screen.getAllByText(/date of created/i)
    const buttonsDeleteTasks = screen.getAllByRole('button', {
      name: /excluir/i
    })
    const buttonsEditTasks = screen.queryAllByRole('button', {
      name: /editar/i
    })

    expect(articles).toHaveLength(5)
    expect(headingOfTasks).toHaveLength(5)
    expect(textsDateOfCreatedTask).toHaveLength(5)
    expect(buttonsDeleteTasks).toHaveLength(5)
    expect(buttonsEditTasks).toHaveLength(0)
  })

  it('should call handleClickButtonDeleteTask function when "Excluir" button is clicked', () => {
    render(<TaskList tasks={listTasks} userIsVip={false} {...taskListProps} />)

    const buttonsDeleteTasks = screen.getAllByRole('button', {
      name: /excluir/i
    })

    userEvent.click(buttonsDeleteTasks[0])
    expect(taskListProps.handleClickButtonDeleteTask).toBeCalledTimes(1)
  })
  it('should call handleClickButtonDeleteTask function when "Editar" button is clicked', () => {
    render(<TaskList tasks={listTasks} userIsVip={true} {...taskListProps} />)

    const buttonsEditTasks = screen.getAllByRole('button', {
      name: /editar/i
    })

    userEvent.click(buttonsEditTasks[0])
    expect(taskListProps.handleClickButtonEditTask).toBeCalledTimes(1)
  })

  it('should match snapshot', () => {
    const { container } = render(
      <TaskList tasks={listTasks} userIsVip={true} {...taskListProps} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

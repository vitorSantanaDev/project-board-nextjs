import { render, screen } from '@testing-library/react'
import { tasksProps } from './mockProps'
import TaskList from '.'

describe('<TaskList />', () => {
  it('should render the article', async () => {
    render(<TaskList tasks={tasksProps} />)
    const article = document.querySelector('#article')
    const headingTask = screen.getAllByRole('heading', { name: /name task/i })
    const createdFormated = screen.getAllByText('Date of Created')

    const editButtons = screen.getAllByRole('button', { name: /editar/i })
    const deleteButtons = screen.getAllByRole('button', { name: /excluir/i })

    expect(article).toBeInTheDocument()
    expect(headingTask).toHaveLength(5)
    expect(createdFormated).toHaveLength(5)
    expect(editButtons).toHaveLength(5)
    expect(deleteButtons).toHaveLength(5)

    screen.logTestingPlaygroundURL()
  })

  it('should match snapshot', () => {
    const { container } = render(<TaskList tasks={tasksProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

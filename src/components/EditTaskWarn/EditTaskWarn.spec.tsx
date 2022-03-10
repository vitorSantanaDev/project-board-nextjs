import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import EditTaskWarn from '.'
import { handleClickCancelEdit } from './mockProps'
describe('<EditTaskWarn />', () => {
  it('should render the button', () => {
    render(<EditTaskWarn handleClickCancelEdit={handleClickCancelEdit} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  it('should call the handleClickCancelEdit function when the button is clicked', () => {
    render(<EditTaskWarn handleClickCancelEdit={handleClickCancelEdit} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(handleClickCancelEdit).toBeCalledTimes(1)
  })
  it('should render the message "Você está editando uma tarefa!"', () => {
    render(<EditTaskWarn handleClickCancelEdit={handleClickCancelEdit} />)
    const text = screen.getByText('Você está editando uma tarefa!')
    expect(text).toBeInTheDocument()
  })

  it('shoul match snapshot', () => {
    const { container } = render(
      <EditTaskWarn handleClickCancelEdit={handleClickCancelEdit} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

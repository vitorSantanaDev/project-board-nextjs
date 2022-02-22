import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '.'
import { formProps } from './mockProps'

describe('<Form />', () => {
  it('should render the Form', () => {
    render(<Form {...formProps} />)
    const input = screen.getByPlaceholderText('Digite sua tarefa')
    const button = screen.getByTestId('buttonSubmit')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
  it('should must call the handleChangeInput function, when typing some value in the input', () => {
    render(<Form {...formProps} />)
    const input = screen.getByPlaceholderText('Digite sua tarefa')

    userEvent.type(input, 'new Task')
    expect(formProps.handleChangeInput).toBeCalledTimes(8)
  })
  it('should call the handleAddTaskSubmit function and clear the input when you click the button', () => {
    render(<Form {...formProps} />)
    const input = screen.getByPlaceholderText('Digite sua tarefa')
    const button = screen.getByTestId('buttonSubmit')

    userEvent.click(button)
    expect(formProps.handleAddTaskSubmit).toBeCalledTimes(1)
    userEvent.type(input, '')
  })

  it('should match snapshot', () => {
    const { container } = render(<Form {...formProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

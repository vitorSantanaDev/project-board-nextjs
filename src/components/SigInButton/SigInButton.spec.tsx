import { render, screen } from '@testing-library/react'
import SigInButton from '.'
import { mockProps } from './mockProps'

describe('<SigInButton />', () => {
  it('should render the username', () => {
    render(
      <SigInButton onClick={mockProps.onClick} session={mockProps.session} />
    )
    const buttonSessionTruthy = screen.getByRole('button', {
      name: /olá harry/i
    })
    expect(buttonSessionTruthy).toBeInTheDocument
  })

  it('should render the text button', () => {
    render(
      <SigInButton onClick={mockProps.onClick} session={!mockProps.session} />
    )
    const buttonSessionFalse = screen.getByRole('button', {
      name: /entrar com github/i
    })
    expect(buttonSessionFalse).toBeInTheDocument
  })

  it('should match snapshot', () => {
    const { container } = render(<SigInButton {...mockProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

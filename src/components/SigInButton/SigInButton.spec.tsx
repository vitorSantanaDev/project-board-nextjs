import { render, screen } from '@testing-library/react'
import SigInButton from '.'

describe('<SigInButton />', () => {
  it('should render the username', () => {
    render(<SigInButton />)
    const buttonSessionTruthy = screen.getByRole('button', {
      name: /olá harry/i
    })
    expect(buttonSessionTruthy).toBeInTheDocument
  })

  it('should render the text button', () => {
    render(<SigInButton />)
    const buttonSessionFalse = screen.getByRole('button', {
      name: /entrar com github/i
    })
    expect(buttonSessionFalse).toBeInTheDocument
  })

  it('should match snapshot', () => {
    const { container } = render(<SigInButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

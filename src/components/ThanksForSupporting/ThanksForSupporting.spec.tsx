import { render, screen } from '@testing-library/react'
import ThanksForSupporting from '.'
import { mockProps } from './mockProps'

describe('<ThanksForSupporting />', () => {
  it('should render the heading', () => {
    render(<ThanksForSupporting {...mockProps} />)
    const heading = screen.getByRole('heading', {
      name: /obrigado por apoiar esse projeto\./i
    })
    const dateOfDonators = screen.getByText(/última doação foi a/i)

    expect(heading).toBeInTheDocument()
    expect(dateOfDonators).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<ThanksForSupporting {...mockProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

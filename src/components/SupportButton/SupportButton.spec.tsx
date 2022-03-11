import { render, screen } from '@testing-library/react'
import SupportButton from '.'

describe('<SupportButton />', () => {
  it('should render the button with text "Apoiar"', () => {
    render(<SupportButton />)
    const button = screen.getByRole('button', { name: /apoiar/i })
    expect(button).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<SupportButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

import { render, screen } from '@testing-library/react'
import PreLoading from '.'

describe('<PreLoading />', () => {
  it('should render the heading', () => {
    render(<PreLoading />)
    expect(
      screen.getByRole('heading', { name: /a simple project board in nextjs/i })
    ).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<PreLoading />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render colors correctly', () => {
    const { container } = render(<PreLoading />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#17181f' })
  })
})

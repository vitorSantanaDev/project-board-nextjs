import { render, screen } from '@testing-library/react'
import PreLoading from '.'

describe('<PreLoading />', () => {
  it('should render two heading and two images', () => {
    render(<PreLoading />)
    const firstImage = screen.getByRole('img', {
      name: /uma logo com uma letra 'b' e um círculo amarelo ao lado/i
    })
    const secondImage = screen.getByRole('img', {
      name: /um usuário de tecnologia, de frente pra um notebook\./i
    })
    const firstHeading = screen.getByRole('heading', {
      name: /a simple project board in nextjs/i
    })
    const secondHeading = screen.getByRole('heading', {
      name: /a simple project board in nextjs/i
    })
    expect(firstImage).toBeInTheDocument()
    expect(secondImage).toBeInTheDocument()
    expect(firstHeading).toBeInTheDocument()
    expect(secondHeading).toBeInTheDocument()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<PreLoading />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#17181f' })
  })

  it('shoul match snapshot', () => {
    const { container } = render(<PreLoading />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

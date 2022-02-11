import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
  it('should render the background color correctly', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#141A29' })

    screen.logTestingPlaygroundURL()
  })

  it('should render logo Borad', () => {
    render(<Header />)
    const logo = screen.getByRole('img', {
      name: /logo meu Board, letra B com circulo amarelo ao lado/i
    })
    expect(logo).toBeInTheDocument()
  })

  it('should render links', () => {
    render(<Header />)

    const navLinkHome = screen.getByRole('link', { name: /home/i })
    expect(navLinkHome).toBeInTheDocument()
    expect(navLinkHome).toHaveAttribute('href', '/')
    expect(navLinkHome).toHaveStyle({ color: '#FFF' })

    const navLinkMyBoard = screen.getByRole('link', { name: /meu board/i })
    expect(navLinkMyBoard).toBeInTheDocument()
    expect(navLinkMyBoard).toHaveAttribute('href', '/board')
    expect(navLinkMyBoard).toHaveStyle({ color: '#FFF' })
  })

  it('should render the component Button', () => {
    render(<Header />)
    const sigInButton = screen.getByRole('button')
    expect(sigInButton).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

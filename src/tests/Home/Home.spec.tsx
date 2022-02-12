import { render } from '@testing-library/react'
import Home from '../../pages/index'

describe('<Home />', () => {
  it('dummy test', () => {
    render(<Home />)
  })

  it('should match snapshot', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

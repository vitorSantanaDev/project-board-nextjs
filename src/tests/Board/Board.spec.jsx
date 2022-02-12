import { render } from '@testing-library/react'
import Board from '../../pages/board'

describe('<Board />', () => {
  it('dummy test', () => {
    render(<Board />)
  })

  it('should match snapshot', () => {
    const { container } = render(<Board />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

import { render } from '@testing-library/react'
import SupportButton from '.'

describe('<SupportButton />', () => {
  it('should render the heading', () => {
    render(<SupportButton />)
  })

  it('should match snapshot', () => {
    const { container } = render(<SupportButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

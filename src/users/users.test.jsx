import { render, screen } from '@testing-library/react'
import Users from './users'

describe('Users', () => {
    it('renders without crashing', () => {
        render(<Users />)
        const textElement = screen.getByText("Users")
        expect(textElement).toBeInTheDocument()
    })
})
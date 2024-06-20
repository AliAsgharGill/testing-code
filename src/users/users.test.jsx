import { render, screen } from '@testing-library/react'
import Users from './users'

describe('Users', () => {
    it('renders without crashing', () => {
        render(<Users />)
        const textElement = screen.getByText("Users")
        expect(textElement).toBeInTheDocument()
    })
    it('user length should be 5', () => {
        render(<Users />)
        const userLength = screen.getByRole("listitem")
        expect(userLength).toHaveLength(5)
    })
})
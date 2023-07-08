import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../../App'
import BookingPage from '../../Pages/BookingPage'

test('Test initial state of booking time selector', () => {
  render(<BookingPage />, { wrapper: App })

  const timeSelect = screen.getByTestId('form-time-select')
  expect(timeSelect).toHaveValue('17:00')
})

test('Test change value of selector', async () => {
  render(<BookingPage />, { wrapper: App })

  await waitFor(() => fireEvent.change(screen.getByTestId('form-time-select'), { target: { value: '20:00' } }))
  const timeSelect = screen.getByTestId('form-time-select')
  expect(timeSelect).toHaveValue('20:00')
})

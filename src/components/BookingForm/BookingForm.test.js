import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import App from '../../App'
import BookingPage from '../../Pages/BookingPage'
import BookingForm from './BookingForm'

test('Test static booking header', () => {
  render(<BookingPage />, { wrapper: App })

  const bookingHeader = screen.getByText('Reserve a table')
  expect(bookingHeader).toHaveTextContent('Reserve a table')
})

test('Test initial state of booking time selector', () => {
  render(<BookingPage />, { wrapper: App })

  const timeSelect = screen.getByTestId('form-time-select')
  expect(timeSelect).toHaveValue('17:00')
})

// test('Test change value of selector', async () => {
//   render(<BookingPage />, { wrapper: App })

//   await waitFor(() => fireEvent.change(screen.getByTestId('form-time-select'), { target: { value: '20:00' } }))
//   const timeSelect = screen.getByTestId('form-time-select')
//   expect(timeSelect).toHaveValue('20:00')
// })

test('Test guests value of input', async () => {
  render(<BookingPage />, { wrapper: App })

  await waitFor(() => fireEvent.change(screen.getByTestId('form-guests-input'), { target: { value: '2' } }))
  const guestInput = screen.getByTestId('form-guests-input')
  expect(guestInput).toHaveValue('2')
})

test('Test guests value of error', async () => {
  render(<BookingPage />, { wrapper: App })

  await act(async () => {
    await waitFor(() => fireEvent.click(screen.getByTestId('form-submit-button')))
  })
  await waitFor(() => {
    expect(screen.getByTestId('form-guests-input')).toBeInTheDocument()
    expect(screen.getByTestId('form-guests-error')).toBeInTheDocument()
  })
})

test('Test submit form', async () => {
  render(<BookingPage />, { wrapper: App })

  await act(async () => {
    await waitFor(() => fireEvent.change(screen.getByTestId('form-guests-input'), { target: { value: '2' } }))
    await waitFor(() => fireEvent.change(screen.getByTestId('form-name-input'), { target: { value: 'John' } }))
    await waitFor(() => fireEvent.change(screen.getByTestId('form-email-input'), { target: { value: 'test@example.com' } }))
    await waitFor(() => fireEvent.click(screen.getByTestId('form-submit-button')))
  })
  await waitFor(() => {
    expect(window.location.href).toContain('confirm')
  })
})

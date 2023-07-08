import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import BookingHeroImg from '../assets/img/reserve-table-hero-image.avif'
import BookingForm from '../components/BookingForm/BookingForm'
import { useReducer } from 'react'

const bookingData = {
  title: 'Reserve a table',
  image: {
    src: BookingHeroImg,
    alt: 'image of food on mane screen'
  }
}

const initialAvailableTimes = () => ([
  { value: '17:00', label: '17:00', selected: true },
  { value: '18:00', label: '18:00', selected: false },
  { value: '19:00', label: '19:00', selected: false },
  { value: '20:00', label: '20:00', selected: false },
  { value: '21:00', label: '21:00', selected: false },
  { value: '22:00', label: '22:00', selected: false }
])

const availableTimeReducer = (state, action) => {
  switch (action.type) {
    case 'set_time': {
      return state.map(timeItem => {
        if (timeItem.value === action.payload) {
          return { ...timeItem, selected: true }
        }
        return { ...timeItem, selected: false }
      })
    }
  }
  throw Error('Unknown action: ' + action.type)
}

const BookingPage = () => {
  const [availableTimes, updateTimes] = useReducer(availableTimeReducer, {}, initialAvailableTimes)
  return (
    <Main>
      <Hero
        title={bookingData.title}
        subtitle={bookingData.subtitle}
        text={bookingData.text}
        button={bookingData.button}
        image={bookingData.image}
      />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </Main>
  )
}

export default BookingPage

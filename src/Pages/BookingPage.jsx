import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import BookingHeroImg from '../assets/img/reserve-table-hero-image.avif'
import BookingForm from '../components/BookingForm/BookingForm'
import { useEffect, useReducer, useState } from 'react'
import { fetchAPI } from '../api/fetchApi'

const bookingData = {
  title: 'Reserve a table',
  image: {
    src: BookingHeroImg,
    alt: 'image of food on mane screen'
  }
}
export const initialAvailableTimes = (date) => {
  const result = fetchAPI(date)
  console.log(result)
  return result.map(resultItem => {
    return { value: resultItem, label: resultItem, selected: false }
  })
}

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
    case 'new_day': {
      console.log('action.payload', action.payload)
      return initialAvailableTimes(action.payload)
    }
  }
  throw Error('Unknown action: ' + action.type)
}

const getInitialDate = () => {
  const currentDate = new Date()
  const month = String((currentDate.getMonth() + 1)).padStart(2, '0')
  const day = String((currentDate.getDate())).padStart(2, '0')
  const year = String((currentDate.getFullYear()))
  return `${year}-${month}-${day}`
}

const BookingPage = () => {
  const [availableTimes, updateTimes] = useReducer(availableTimeReducer, {}, () => initialAvailableTimes(new Date()))
  const [formDate, setFormDate] = useState(getInitialDate())

  console.log('formDate =>', formDate)
  useEffect(() => {
    if (formDate) {
      updateTimes({ type: 'new_day', payload: new Date(formDate) })
    }
  }, [formDate])
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
        formDate={formDate}
        setFormDate={setFormDate}
      />
    </Main>
  )
}

export default BookingPage

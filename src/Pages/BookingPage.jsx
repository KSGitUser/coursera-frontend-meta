import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import BookingHeroImg from '../assets/img/reserve-table-hero-image.avif'
import BookingForm from '../components/BookingForm/BookingForm'
import { useEffect, useReducer, useState, useMemo } from 'react'
import { fetchAPI, submitAPI } from '../api/fetchApi'
import { useNavigate } from 'react-router-dom'

const bookingData = {
  title: 'Reserve a table',
  image: {
    src: BookingHeroImg,
    alt: 'image of food on mane screen'
  }
}

export const initialAvailableTimes = (dataState, date) => {
  const result = fetchAPI(date)
  const formattedDate = formatDateToString(date)
  const availableTimes = result.map(resultItem => {
    return {
      value: resultItem,
      label: resultItem,
      selected: false,
      booked: false
    }
  })
  dataState.set(formattedDate, availableTimes)
  return new Map(dataState)
}

const availableTimeReducer = (state, action) => {
  switch (action.type) {
    case 'set_time': {
      const dateTime = state.get(action.payload.date)
      const newDateTime = dateTime.map(timeItem => {
        if (timeItem.value === action.payload.time) {
          return { ...timeItem, selected: true }
        }
        return { ...timeItem, selected: false }
      })
      state.set(action.payload.date, newDateTime)
      return new Map(state)
    }
    case 'new_day': {
      return initialAvailableTimes(state, action.payload)
    }
    case 'reserve_time': {
      const availableTime = state.get(action.payload.date)
      if (availableTime && Array.isArray(availableTime)) {
        availableTime.forEach(time => {
          if (time.value === action.payload.time) {
            time.booked = true
          }
          time.selected = false
        })
        state.set(availableTime)
        return new Map(state)
      }
      return state
    }
  }
  throw Error('Unknown action: ' + action.type)
}

function formatDateToString (date) {
  const month = String((date.getMonth() + 1)).padStart(2, '0')
  const day = String((date.getDate())).padStart(2, '0')
  const year = String((date.getFullYear()))
  return `${year}-${month}-${day}`
}

const BookingPage = () => {
  const [availableTimes, updateTimes] = useReducer(
    availableTimeReducer,
    new Map(),
    () => initialAvailableTimes(new Map(), new Date()))
  const [formDate, setFormDate] = useState(formatDateToString(new Date()))
  const navigate = useNavigate()

  useEffect(() => {
    if (formDate) {
      updateTimes({ type: 'new_day', payload: new Date(formDate) })
    }
  }, [formDate])

  const currentDateAvailableTimes = useMemo(() => {
    const currentDateAvailableTimes = availableTimes.get(formDate)
    return currentDateAvailableTimes || []
  }, [availableTimes, formDate])

  const submitFormHandler = (formData) => {
    const result = submitAPI(formData)
    if (result === true) {
      updateTimes({ type: 'reserve_time', payload: { time: formData.get('time'), date: formData.get('date') } })
      navigate('/confirm')
    }
  }

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
        availableTimes={currentDateAvailableTimes}
        updateTimes={updateTimes}
        formDate={formDate}
        setFormDate={setFormDate}
        submitForm={submitFormHandler}
      />
    </Main>
  )
}

export default BookingPage

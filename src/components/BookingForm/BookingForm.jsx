import React, { useEffect, useRef, useState, useMemo } from 'react'
import {
  Box,
  Button,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  FormErrorMessage
} from '@chakra-ui/react'
import useSubmit from '../../hooks/useSubmit'
import { useAlertContext } from '../../context/alertContext'
import { object, string, date } from 'yup'

const occasionValues = [
  { value: 'Birthday', label: 'Birthday' },
  { value: 'Anniversary', label: 'Anniversary' }
]
const BookingForm = ({
  availableTimes,
  updateTimes,
  formDate,
  setFormDate,
  submitForm
}) => {
  const { isLoading, response } = useSubmit()
  const { onOpen } = useAlertContext()
  const formRef = useRef(null)

  const [formNumberInput, setFormNumberInput] = useState('')
  const [formOccasion, setFormOccasion] = useState('')
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formErrors, setFormErrors] = useState({})

  const selectedTime = useMemo(() => {
    for (const timeItem of availableTimes) {
      if (timeItem?.selected) {
        return timeItem.value
      }
    }
    return ''
  }, [availableTimes])

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const formShema = object({
      name: string().required(),
      email: string().required().email(),
      date: date().default(() => new Date()),
      time: string().required(),
      numberInput: string().required(),
      occasion: string().required()
    })

    let errors = {}
    try {
      setFormErrors({})
      await formShema.validate(
        Object.fromEntries([...formData.entries()]), { abortEarly: false })
    } catch (err) {
      errors = err.inner.reduce((acc, error) => {
        return {
          ...acc,
          [error.path]: error.message
        }
      }, {})
      setFormErrors(errors)
    }
    if (!Object.keys(errors).length) {
      submitForm(formData)
    }
  }

  useEffect(() => {
    if (response) {
      const { type, message } = response
      onOpen(type, message)
      if (type === 'success') {
        // TODO reset form
      }
    }
  }, [response, onOpen])

  return (
    <div
      spacing={8}
    >
      <VStack w='100%' maxW='1024px' p={8} alignItems='flex-start' className='container'>
        <Box py={6} rounded='md' w='100%'>
          <form ref={(e) => { if (!formRef.current && e) { formRef.current = e.target } }} onSubmit={onFormSubmit}>
            <VStack spacing={4}>
              <Box w='100%'>
                <Heading variant='subtitle' mb={6} as='h2'>Reservation data:</Heading>
                <FormControl>
                  <FormLabel htmlFor='date'>Choose date</FormLabel>
                  <Input
                    type='date'
                    variant='flushed'
                    id='date'
                    name='date'
                    value={formDate}
                    onChange={(e) => { setFormDate(e.target.value) }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='time'>Choose time</FormLabel>
                  <Select
                    data-testid='form-time-select'
                    variant='flushed'
                    id='time'
                    name='time'
                    value={selectedTime}
                    onChange={(e) => {
                      updateTimes({
                        type: 'set_time',
                        payload: { time: e.target.value, date: formDate }
                      })
                    }}
                  >
                    {availableTimes.map(avTime => <option disabled={avTime.booked} key={avTime.value} value={avTime.value}>{avTime.label}</option>)}
                  </Select>
                </FormControl>
                <FormControl isInvalid={formErrors.numberInput}>
                  <FormLabel htmlFor='numberInput'>Choose number of geusts</FormLabel>
                  <NumberInput
                    variant='flushed'
                    id='numberInput'
                    name='numberInput'
                    min={1}
                    max={10}
                  >
                    <NumberInputField
                      data-testid='form-guests-input'
                      value={formNumberInput}
                      onChange={(e) => { setFormNumberInput(e.target.value) }}
                    />
                  </NumberInput>
                  <FormErrorMessage data-testid='form-guests-error'>{formErrors.numberInput}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formErrors.occasion}>
                  <FormLabel htmlFor='time'>Occasion</FormLabel>
                  <Select
                    data-testid='form-ocassion-select'
                    variant='flushed'
                    id='occasion'
                    name='occasion'
                    value={formOccasion}
                    onChange={(e) => { setFormOccasion(e.target.value) }}
                  >
                    {occasionValues.map(avTime => <option key={avTime.value} value={avTime.value}>{avTime.label}</option>)}
                  </Select>
                  <FormErrorMessage>{formErrors.occasion}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formErrors.name}>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input
                    variant='flushed'
                    data-testid='form-name-input'
                    id='name'
                    name='name'
                    value={formName}
                    onChange={(e) => { setFormName(e.target.value) }}
                  />
                  <FormErrorMessage>{formErrors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formErrors.email}>
                  <FormLabel htmlFor='email'>Email:</FormLabel>
                  <Input
                    type='email'
                    data-testid='form-email-input'
                    variant='flushed'
                    id='email'
                    name='email'
                    value={formEmail}
                    onChange={(e) => { setFormEmail(e.target.value) }}
                  />
                  <FormErrorMessage>{formErrors.email}</FormErrorMessage>
                </FormControl>
              </Box>
              <Button data-testid='form-submit-button' type='submit' colorScheme='purple' width='full' isLoading={isLoading}>
                Make Your reservation
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </div>
  )
}

export default BookingForm

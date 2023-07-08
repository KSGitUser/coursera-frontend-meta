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
  NumberInputField
} from '@chakra-ui/react'
import useSubmit from '../../hooks/useSubmit'
import { useAlertContext } from '../../context/alertContext'

const occasionValues = [
  { value: 'Birthday', label: 'Birthday' },
  { value: 'Anniversary', label: 'Anniversary' }
]
const BookingForm = ({ availableTimes, updateTimes }) => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()
  const formRef = useRef(null)

  const [formDate, setFormDate] = useState('')
  const [formNumberInput, setFormNumberInput] = useState('')
  const [formOccasion, setFormOccasion] = useState('')

  const selectedTime = useMemo(() => {
    for (const timeItem of availableTimes) {
      if (timeItem?.selected) {
        return timeItem.value
      }
    }
    return ''
  }, [availableTimes])

  //   const formFields = {
  //     reservarionData: [
  //       {
  //         labelText: 'Choose date',
  //         type: 'input',
  //         inputType: 'date',
  //         inputName: 'date',
  //         state: useState(new Date())
  //       },
  //       {
  //         labelText: 'Choose time',
  //         type: 'select',
  //         inputName: 'time',
  //         options: availableTimes,
  //         state: useState('')
  //       },
  //       {
  //         labelText: 'Number of guests',
  //         type: 'numberInput',
  //         inputName: 'guests',
  //         min: 1,
  //         max: 10,
  //         state: useState('')
  //       },
  //       {
  //         labelText: 'Occasion',
  //         type: 'select',
  //         inputName: 'occasion',
  //         state: useState(new Date()),
  //         options: [
  //           { value: 'Birthday', label: 'Birthday' },
  //           { value: 'Anniversary', label: 'Anniversary' }
  //         ]
  //       }

  //     ]
  //   }

  const onFormSubmit = (e) => { e.preventDefault(); submit() }

  useEffect(() => {
    console.log('response =>', response)
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
                    onChange={(e) => { updateTimes({ type: 'set_time', payload: e.target.value }) }}
                  >
                    {availableTimes.map(avTime => <option key={avTime.value} value={avTime.value}>{avTime.label}</option>)}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='numberInput'>Choose number of geusts</FormLabel>
                  <NumberInput
                    variant='flushed'
                    id='numberInput'
                    name='numberInput'
                    min={1}
                    max={10}
                  >
                    <NumberInputField
                      value={formNumberInput}
                      onChange={(e) => { setFormNumberInput(e.target.value) }}
                    />
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='time'>Occasion</FormLabel>
                  <Select
                    variant='flushed'
                    id='occasion'
                    name='occasion'
                    value={formOccasion}
                    onChange={(e) => { setFormOccasion(e.target.value) }}
                  >
                    {occasionValues.map(avTime => <option key={avTime.value} value={avTime.value}>{avTime.label}</option>)}
                  </Select>
                </FormControl>
              </Box>
              <Button type='submit' colorScheme='purple' width='full' isLoading={isLoading}>
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

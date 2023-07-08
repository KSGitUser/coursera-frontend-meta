import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  Heading,
  VStack
} from '@chakra-ui/react'
import * as Yup from 'yup'
import useSubmit from '../../hooks/useSubmit'
import { useAlertContext } from '../../context/alertContext'
import FormInput from './FormInput'

const BookingForm = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()
  const availableTimes = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
    { value: '22:00', label: '22:00' }
  ]

  const formFields = {
    reservarionData: [
      {
        labelText: 'Choose date',
        type: 'input',
        inputType: 'date',
        inputName: 'date'
      },
      {
        labelText: 'Choose time',
        type: 'select',
        inputName: 'time',
        options: availableTimes
      },
      {
        labelText: 'Number of guests',
        type: 'numberInput',
        inputName: 'guests',
        min: 1,
        max: 10
      },
      {
        labelText: 'Occasion',
        type: 'select',
        inputName: 'occasion',
        options: [
          { value: 'Birthday', label: 'Birthday' },
          { value: 'Anniversary', label: 'Anniversary' }
        ]
      }

    ]
  }

  const formik = useFormik({
    initialValues: { date: null, firstName: '', email: '', type: '', comment: '' },
    onSubmit: (values) => {
      submit('/', values)
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Required'),
      firstName: Yup.string().required('Required'),
      email: Yup.string().required('Required').email('Invalid email address'),
      type: Yup.string().optional(),
      comment: Yup.string().required('Required').min(25, 'Must be at least 25 characters')
    })
  })

  useEffect(() => {
    if (response) {
      const { type, message } = response
      onOpen(type, message)
      if (type === 'success') {
        formik.resetForm()
      }
    }
  }, [response, formik, onOpen])

  const getIsValid = (fieldName) => formik.errors[fieldName] && formik.touched[fieldName]

  const getErrorMessage = (fieldName) => formik.errors[fieldName]

  return (
    <div
      spacing={8}
    >
      <VStack w='100%' maxW='1024px' p={8} alignItems='flex-start' className='container'>
        <Box py={6} rounded='md' w='100%'>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <Box w='100%'>
                <Heading variant='subtitle' mb={6} as='h2'>Reservation data:</Heading>
                {formFields.reservarionData.map(reservationInput => (
                  <FormInput
                    key={reservationInput.name}
                    inputData={reservationInput}
                    formik={formik}
                    getIsValid={getIsValid}
                    getErrorMessage={getErrorMessage}
                  />
                ))}
              </Box>
              <Button type='submit' colorScheme='purple' width='full' isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </div>
  )
}

export default BookingForm

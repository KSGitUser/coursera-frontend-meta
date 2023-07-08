import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select
} from '@chakra-ui/react'

const FormInput = ({ inputData }) => {
  const inputElements = {
    numberInput () {
      return (
        <NumberInput
          variant='flushed'
          id={inputData.inputName}
          name={inputData.inputName}
          value={inputData.state[0]}
          onChange={(e) => inputData.state[1](e.target.value)}
          min={inputData.min}
          max={inputData.max}
        >
          <NumberInputField />
        </NumberInput>
      )
    },
    input () {
      return (
        <Input
          type={inputData.inputType}
          variant='flushed'
          id={inputData.inputName}
          name={inputData.inputName}
          value={inputData.state[0]}
          onChange={(e) => { console.log(e); inputData.state[1](e.target.value) }}
        />
      )
    },
    select () {
      return (
        <Select
          variant='flushed'
          id={inputData.inputName}
          name={inputData.inputName}
          value={inputData.state[0]}
          onChange={(e) => inputData.state[1](e.target.value)}
        >
          {inputData.options.map((selectOption, index) => (
            <option key={selectOption.value + index} value={selectOption.value}>
              {selectOption.label}
            </option>))}
        </Select>
      )
    }

  }

  return (
    <FormControl key={inputData.inputName}>
      <FormLabel htmlFor={inputData.inputName}>{inputData.labelText}</FormLabel>
      {inputElements[inputData.type]?.() || null}
    </FormControl>
  )
}

export default FormInput
